const fs = require('fs');
const https = require('https');

if(process.argv.indexOf('help') !== -1){
	console.log(fs.readFileSync('./help.txt').toString())
	return;
}
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});


const settings  = JSON.parse(fs.readFileSync('./credentials.json'));
let token;

const login = async () => {
	const postData =  JSON.stringify({email: settings.login, password: settings.password});
	const options = {
		'method': 'POST',
		'hostname': 'api.userguiding.com',
		'path': '/api/access-token/',
		'headers': {
			'Content-Type': 'application/json'
		}
	};

	const req = https.request(options, function (res) {
		const chunks = [];

		res.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			token = JSON.parse(body.toString()).token;
			upd();
		});

		res.on("error", function (error) {
			console.error(error);
		});
	});


	req.write(postData);

	req.end();
}

const upd = () => {
	var options = {
		'method': 'POST',
		'hostname': 'api.userguiding.com',
		'path': '/api/panel/guides/'+settings.guideId+'/',
		'headers': {
			'Authorization': 'JWT '+token,
			'Content-Type': 'application/json'
		}
	};
	
	var req = https.request(options, function (res) {
		var chunks = [];
	
		res.on("data", function (chunk) {
			chunks.push(chunk);
		});
	
		res.on("end", function (chunk) {
			var body = Buffer.concat(chunks);
			//console.log(body.toString());
		});
	
		res.on("error", function (error) {
			console.error(error);
		});
	});
	
	const htmlBlocks = settings.body.stepsHtml
	.map(address =>
		fs.readFileSync(address).toString('utf-8').match(/\<body(.*?)\>.*?\<\/body\>/gs).map( block =>
			block.replace("\n", '').replace(/<\/?body.*\>/g,''))[0])
	.map(
		block =>
		({
			...settings.body.commonHtml,
			'content': {
				'_html': block
			}
		})
		)
	.map(block =>
		({
			
			...settings.body.commonOfSteps,
			'components': [block]
		})
		)

	const body = JSON.stringify({
		...settings.body.general,
		'steps': [...htmlBlocks]
	})
	req.write(body);
	req.end();
}

login();
//console.log(fs.readFileSync('./index.html').toString('utf-8').match(/\<body(.*?)\>.*?\<\/body\>/gs)[0].replace("\n", '')
//)