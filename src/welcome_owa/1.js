import React from 'react';
import ReactDOM from 'react-dom';


const LandingPage = () => {
        return (
            <div className="wizard-wrap" style={{
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
            <div className="wizard-header" style={{
                textAlign: 'center',
                padding: '0vmin 0 0',
            }}>
                <img src="https://smartcloudconnect.io/wp-content/uploads/scc-logo.png" className="logo" style={{
                    maxHeight: '5vh',
                    width: 'auto'
                }}/>
            </div>
        <div className="wizard-carousel">
            <div className="item" style={{
                minHeight: 'calc(90vh - 80px);height: calc(90vh - 80px);overflow-x: hidden',
                display: 'block',
                textAlign: 'center',
                maxWidth: '100%'
            }}>
                <h2 className="title big" style={{
                    color: '#06337c',
                    fontFamily: "'Cabin', 'Open Sans', sans-serif",
                    fontSize: '20vmin',
                    fontWeight: 700,
                    margin: '8vmin 0 2vmin',
                    lineHeight: 1
                }}>
                    #1
                </h2>
                <h2 className="title" style={{
                    color: '#06337c',
                    fontFamily: "'Cabin', 'Open Sans', sans-serif",
                    fontSize: '7vmin',
                    fontWeight: 700,
                    margin: '4vmin 0 1vmin',
                    lineHeight: 1.3,
                    padding: '0 6vmin',
                }}>
                    {__('title_enterprise_solution').context}
                </h2>
                <div className="inline-img-block wizard1">

                    <div className="inline-img-block-1" style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        margin: '6vmin 2% 5vmin',
                        width: '45%'
                    }}>
                        <img src="https://smartcloudconnect.io/wp-content/uploads/Gartner-Cool-Vendor_color.png" alt="" style={{
                            maxWidth: '100%',
                            maxHeight: '150px',
                            objectFit: 'contain',
                            maxHeight: '13vmin'
                        }}/>
                    </div>

                    <div className="inline-img-block-2" style={{
                        display: 'inline-block',
                        verticalaAlign: 'middle',
                        margin: '5vmin 2%',
                        width: '45%',
                    }}>
                        <img src="https://smartcloudconnect.io/wp-content/uploads/app_rating.png" alt="" style={{
                            maxWidth: '100%',
                            maxHeight: '150px',
                            objectFit: 'contain',
                            maxHeight: '12vmin'
                        }}/>
                    </div>

                    <div className="inline-img-block-3" style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        margin: '2vmin 2% 2vmin',
                        width: '45%',
                        textAlign: 'right',
                    }}>
                        <img src="https://smartcloudconnect.io/wp-content/uploads/file-manager/medal.svg" alt="" style={{
                            maxWidth: '100%',
                            height: '27vmin',
                            objectFit: 'contain'
                        }}/>
                    </div>

                    <div className="inline-img-block-4" style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        margin: '2vmin 2% 2vmin',
                        width: '45%',
                        textAlign: 'left',
                    }}>
                        <img src="https://smartcloudconnect.io/wp-content/uploads/ISO.png" alt="" style={{
                            maxWidth: '100%',
                            maxHeight: '150px',
                            objectFit: 'contain',
                            maxHeight: '35vmin',
                        }}/>
                    </div>
                </div>
                <div className="inline-img-block wizard1"></div>
            </div>
            <div style={{
                textAlign: 'center'
            }}>
                <a style={{
                    color: '#06337c',
                    fontFamily: "'Cabin', 'Open Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: '18px',
                    textDecoration: 'none',
                    textAlign: 'center'
                }} target="_blank" href="https://smartcloudconnect.io/?utm_source=ProductWizard">
                {__('link').context}
                </a>
            </div>
        </div>
    </div>
    );
}

// ReactDOM.hydrate is used to ensure that client renders the same content that was sent by the server
// Despite of that, this is the same as ReactDOM.render.
// This should print out the warning, because we render slightly different LandingPage on client-side.
ReactDOM.hydrate(<LandingPage />, document.getElementById('wizard-scc'));

// Exporting LandingPageApp to work with "prerender-loader"
export default () => {
    // Using import() to give webpack a hint that we don't need ReactDOMServer in our client.
    // Though, it still will be packed into a bundle and available to the client.
    // You may want to check .babelrc to see how dynamic imports were enabled.
    import("react-dom/server").then((ReactDOMServer) => ReactDOMServer.renderToString(<LandingPage />));
}
