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
            }}/>
        </div>
    
        <div className="wizard-carousel">

            <div className="item" style={{
                 minHeight: 'calc(90vh - 80px);height: calc(90vh - 80px);overflow-x: hidden',
                 display: 'block',
                 textAlign: 'center',
                 maxWidth: '100%',
            }}>
                <div className="inline-img-block" style={{
                    marginBottom: '1%',
                    maxWidth: '800px',
                    margin: '0 auto',
                }}>
                    <div style={{
                        display: 'inline-block',
                        width: '26%',
                        verticalAlign: 'middle',
                        margin: '3vmin 3% 2vmin'
                    }}>
                        <img src="https://smartcloudconnect.io/wp-content/uploads/logo-salesforce.svg" alt="" style={{
                            maxWidth: '100%',
                            objectFit: 'contain',
                            maxHeight: '13vh',
                        }}/>
                    </div>
                    <div style={{
                        display: 'inline-block',
                        width: '26%',
                        verticalAlign: 'middle',
                        margin: '3vmin 3% 2vmin'
                    }}>
                        <img src="https://smartcloudconnect.io/wp-content/uploads/3-layers-1.png" alt="" style={{
                            maxWidth: '100%',
                            objectFit: 'contain',
                            maxHeight: '16vh'
                        }}/>
                    </div>
                    <div style={{
                        display: 'inline-block',
                        width: '26%',
                        verticalAlign: 'middle',
                        margin: '3vmin 3% 2vmin'
                    }}>
                        <img src="https://smartcloudconnect.io/wp-content/uploads/Outlook.svg" alt="" style={{
                            maxWidth: '100%',
                            maxHeight: '150px',
                            objectFit: 'contain',
                            maxHeight: '14vh'
                        }}/>
                    </div>
                </div>
                <h2 className="title" style={{
                    color: '#06337c',
                    fontFamily: "'Cabin', 'Open Sans', sans-serif",
                    fontSize: '8vmin',
                    fontWeight: 700,
                    margin: 0,
                    marginBottom: '4vmin'
                }}>
                    {__('keep_your_salesforce').context}
                </h2>
                <p className="text text2" style={{
                    color: '#06337c',
                    fontFamily: "'Cabin', 'Open Sans', sans-serif",
                    fontSize: '7vmin',
                    fontWeight: '400',
                    margin: 0,
                    marginBottom: '2vmin'
                }}>
                    {__('automatically_synchronize').context}
                </p>
                <div className="inline-img-block wizard3">
                    <div style={{
                        display: 'inline-block',
                        width: '18%',
                        verticalAlign: 'middle',
                        margin: '3vmin 3% 2vmin',
                        textAlign: 'center'
                    }}>
                        <div style={{ height: '46px' }}>
                            <img className="icons-svg img1" src="https://smartcloudconnect.io/wp-content/uploads/email-icon.svg" alt="" style={{
                                maxHeight: '46px',
                                objectFit: 'contain',
                                maxWidth: '81%',
                                height: 'auto'
                            }} />
                        </div>

                        <p className="text small" style={{
                            color: '#06337c',
                            fontFamily: "'Cabin', 'Open Sans', sans-serif",
                            fontSize: '15px',
                            fontWeight: 400,
                            margin: 0,
                            marginTop: '1vmin',
                            fontSize: '3vmin'
                        }}>
                            {__('automatically_synchronize').menu.emails.context}
                        </p>
                    </div>
                    <div style={{
                        display: 'inline-block',
                        width: '18%',
                        verticalAlign: 'middle',
                        margin: '3vmin 3% 2vmin'
                    }}>
                        <div style={{
                            height: '46px'
                        }}>
                            <img className="icons-svg img2" src="https://smartcloudconnect.io/wp-content/uploads/task-icon.svg" alt="" style={{
                                maxHeight: '46px',
                                objectFit: 'contain',
                                maxWidth: '80%',
                                height: 'auto'
                            }} />

                        </div>
                        <p className="text small" style={{
                            color: '#06337c',
                            fontFamily: "'Cabin', 'Open Sans', sans-serif",
                            fontSize: '15px',
                            fontWeight: 400,
                            margin: 0,
                            marginTop: '1vmin',
                            fontSize: '3vmin'
                        }}>
                            {__('automatically_synchronize').menu.emails.context}
                        </p>
                    </div>

                    <div style={{
                        display: 'inline-block',
                        width: '18%',
                        verticalAlign: 'middle',
                        margin: '3vmin 3% 2vmin'
                    }}>
                        <div style={{
                            height: '46px',
                            textAlign: 'right'
                        }}>
                            <img className="icons-svg img3" src="https://smartcloudconnect.io/wp-content/uploads/contact-icon.svg" alt="" style={{
                                 maxHeight: '46px',
                                 objectFit: 'contain',
                                 maxWidth: '80%',
                                 height: 'auto',
                            }} /> 
                        </div>
                        <p className="text small" style={{
                            color: '#06337c',
                            fontFamily: "'Cabin', 'Open Sans', sans-serif",
                            fontSize: '15px',
                            fontWeight: 400,
                            margin: 0,
                            marginTop: '1vmin',
                            fontSize: '3vmin'
                        }}>
                            {__('automatically_synchronize').menu.contacts.context}
                        </p>
                    </div>
                    <div style={{
                        display: 'inline-block',
                        width: '18%',
                        verticalAlign: 'middle',
                        margin: '3vmin 3% 2vmin'
                    }}>
                        <div style={{
                            height: '46px',
                            textAlign: 'center'
                        }}>
                            <img className="icons-svg img4" src="https://smartcloudconnect.io/wp-content/uploads/calendar-icon.svg" alt="" style={{
                                maxHeight: '46px',
                                objectFit: 'contain',
                                maxWidth: '68%;margin-left: 11%',
                                height: 'auto',
                            }} />
                        </div>
                        <p className="text small" style={{
                            color: '#06337c',
                            fontFamily: "'Cabin', 'Open Sans', sans-serif",
                            fontSize: '15px',
                            fontWeight: 400,
                            margin: 0,
                            marginTop: '1vmin',
                            fontSize: '3vmin'
                        }}>
                            {__('automatically_synchronize').menu.calendars.context}
                        </p>
                    </div>
                </div>
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
            }} target="_blank" href="https://smartcloudconnect.io/features/enterprise-sync-engine/?utm_source=ProductWizard">
                {__('link').context}
            </a></div>
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
