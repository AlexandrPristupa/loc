const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const I18nPlugin = require('i18n-webpack-plugin');
const path = require('path');
const fs = require('fs');
const dist = path.resolve(__dirname, 'dist');

const locale = {
    en: require('./locales/en.json'),
	de: require('./locales/de.json'),
	es: require('./locales/es.json'),
	fr: require('./locales/fr.json'),
	no: require('./locales/no.json'),
	pt: require('./locales/pt.json')
};

// Our function that generates our html plugins
const generateHtmlPlugins = templateDir => {
    // Read files in template directory
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));

    return templateFiles.map(item => {
        // Split names and extension
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];

        // Create new HTMLWebpackPlugin with options
        return new HtmlWebpackPlugin({
            filename: `${name}.${extension}`,
            template: `!!prerender-loader?string!./${templateDir}/${name}.${extension}`,
            chunks: [name]
      });
    });
};

const generateJavaScriptEntrypoint = templateDir => {
    const javaScriptFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    const entry = {};

    javaScriptFiles.forEach(file => {
        const parts = file.split('.');
        const name = parts[0];
        const extension = parts[1];

        entry[name] = `./src/welcome_owa/${name}.${extension}`;
    });

    return entry;
}
  
// Call our function on our views directory.
const htmlPlugins = generateHtmlPlugins('./public');
const javaScriptEntry = generateJavaScriptEntrypoint('./src/welcome_owa/');

console.log(javaScriptEntry);

console.log(htmlPlugins);

module.exports = () => {

    return Object.keys(locale).map(lang => ({
        name: lang,

        entry: javaScriptEntry,

        output: {
            filename: "[name].js",
            chunkFilename: "[id].[hash].bundle.js",
            path: `${dist}/${lang}/welcome__owa`
        },

        resolve: {
            modules: [
                "node_modules"
            ]
        },

        optimization: {
            splitChunks: {
                chunks: 'all'
            },
            runtimeChunk: true
        },

        devtool: "cheap-module-source-map",

        plugins: [
            new CleanWebpackPlugin(dist), // this cleans up dist/ folder every time to keep it clean
            new I18nPlugin(locale[lang], { nested: true }),
            ...htmlPlugins
        ],

        module: {
            // There is only the most basic support for .js files.
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    "@babel/preset-react",
                                    "@babel/env"
                                ],
                                compact: true
                            }
                        }
                    ]
                }
            ]
        }
    }));
};