import React from 'react';
import ReactDOM from 'react-dom';


const LandingPage = () => (
        <div className="wizard-wrap" style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <div className="wizard-header" style={{
                textAlign: 'center'
            }}>
                <img src="https://smartcloudconnect.io/wp-content/uploads/scc-logo.png" className="logo" style={{
                    maxHeight: '5vh',
                    width: 'auto'
                }} />
            </div>

            <div className="wizard-carousel">

                <div className="item" style={{
                    minHeight: 'calc(90vh - 80px);height: calc(90vh - 80px);overflow-x: hidden',
                    display: 'block',
                    textAlign: 'center',
                    maxWidth: '100%'
                }}>
                    <div className="img-block" style={{
                        margin: '10px 0 5vmin'
                    }}>
                        <img src="https://smartcloudconnect.io/wp-content/uploads/screen-4-img.svg" alt="" style={{
                            maxWidth: '90%',
                            objectFit: 'contain',
                            maxHeight: '34vh'
                        }} />
                    </div>
                    <h2 className="title" style={{
                        color: '#06337c',
                        fontFamily: "'Cabin', 'Open Sans', sans-serif",
                        fontSize: '7vmin',
                        fontWeight: 700,
                        margin: 0,
                        marginBottom: '5vmin'
                    }}>
                        {__('book_every_meeting').context}
                    </h2>
                    <p className="text" style={{
                        color: '#06337c',
                        fontFamily: "'Cabin', 'Open Sans', sans-serif",
                        fontSize: '6vmin',
                        fontWeight: 400,
                        margin: 0
                    }}>
                        {__('schedule_meetings').context}
                    </p>
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
                        textAlign: 'center',
                    }} target="_blank" href="https://smartcloudconnect.io/features/outlook-salesforce-calendar-synchronization/?utm_source=ProductWizard">
                        {__('link').context}
                    </a>
                </div>
            </div>
        </div>
)

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
