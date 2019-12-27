import React from 'react';
import ReactDOM from 'react-dom';


const LandingPage = () => {
        return (
                <div className="wizard-wrap" style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}>
                    <div className="wizard-header" style={{
                        textAlign: 'center'
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
                            maxWidth: '100%',
                        }}>
                            <div className="img-block" style={{
                                margin: '10px 0 2vmin'
                            }}>
                                <img src="https://smartcloudconnect.io/wp-content/uploads/screen-2-img.svg" alt="" style={{
                                    objectFit: 'contain',
                                    maxWidth: '90%',
                                    maxHeight: '32vh'
                                }}/>
                            </div>
                            <h2 className="title" style={{
                                color: '#06337c',
                                fontFamily: "'Cabin', 'Open Sans', sans-serif",
                                fontSize: '6vmin',
                                fontWeight: 700,
                                margin: '6vmin 0',
                                lineHeight: 1.3,
                            }}>
                                {__('title_increase_sales').context}
                            </h2>
                            <h2 className="title big" style={{
                                color: '#06337c',
                                fontFamily: "'Cabin', 'Open Sans', sans-serif",
                                fontSize: '16vmin',
                                fontWeight: 700,
                                margin: '6vmin 0',
                                lineHeight: 1
                            }}>
                                20%
                            </h2>
                            <p className="text" style={{
                                color: '#06337c',
                                fontFamily: "'Cabin', 'Open Sans', sans-serif",
                                fontSize: '6vmin',
                                fontWeight: 400,
                                margin: 0,
                                lineHeight: 1.3
                            }}>
                                {__('work_with_all').context}
                            </p>
                        </div>
                        <div style={{
                            textAlign: 'center'
                        }}><a style={{
                            color: '#06337c',
                            fontFamily: "'Cabin', 'Open Sans', sans-serif",
                            fontSize: '14px',
                            fontWeight: 700,
                            margin: 0,
                            lineHeight: '18px',
                            textDecoration: 'none',
                            textAlign: 'center'
                        }} target="_blank" href="https://smartcloudconnect.io/features/email-sidebar/?utm_source=ProductWizard">
                            {__('link').context}
                        </a></div>
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
