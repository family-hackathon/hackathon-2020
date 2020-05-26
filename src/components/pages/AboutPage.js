import React, { Component } from 'react';  

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Matomo from "../analytics/Matomo";

class AboutPage extends Component {
    render() {
        return (
            <div>
                <Matomo title={'About'} customUrl={'/' + window.location.hash.substr(1)} />
                <div id="container" className="container w-full content-center items-center justify-center pt-8 pb-8 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto">
                    <div className="text-sm font-medium pb-4">
                        <Link className="hover:underline hover:text-blue-400" to="/" style={{color: "#0066FF"}}>Home</Link>{' '} / <span>About the Project</span>
                    </div>
                    <h1 className="text-3xl pb-8">
                        About the Project
                    </h1>
                    <div className="text-base pb-12">
                            <p className="pb-4">
                                <strong>This project is currently a proof of concept.</strong>  Further work is ongoing and we encourage feedback! If you see apps missing or corrections that should be made, please contact us at <a className="hover:underline hover:text-blue-400" to="/" style={{color: "#0066FF"}} href="mailto:info@covid19apptracker.org">info@covid19apptracker.org</a>. We hope this encourages greater transparency and leads to further privacy research around the globe.
                            </p>
                            <p className="pb-4">
                                With the current pandemic has emerged privacy concerns with the large number of applications being published and promoted around the globe. From symptom tracking to contact tracing, the <strong>COVID-19 App Tracker Project</strong> aims to identify and track applications published on the Google Play Store.
                            </p>
                            <p className="pb-4">
                                At this time, the <strong>COVID-19 App Tracker Project</strong> only looks for applications on the Google Play Store that fall within at least one of the following categories:
                            </p>
                            <div>
                                <ul className="list-disc pl-4">
                                    <li>Contact Tracing</li>
                                    <li>Symptom Tracking</li>
                                    <li>COVID-19 Information</li>
                                </ul> 
                            </div>
                    </div>
                    <hr className="border-black pb-12" width="32px"/>
                    <h1 className="text-3xl pb-8">
                        Our Intended Audience
                    </h1>
                    <div className="text-base pb-12">
                        <p className="pb-4">
                            We hope this project leads to greater transparency for these new applications’ privacy and security implications around the globe. Many apps are being created quickly, resulting in poor security or are not clearly articulating how they are using the data they are collecting. We created this project for the following groups so that they may be better equipped to conduct further research or advocate for specific changes they see fit for their communities. 
                        </p>
                        <div>
                            <ul className="list-disc pl-4">
                                <li>Researchers</li>
                                <li>Privacy Advocates</li>
                                <li>Journalists</li>
                                <li>General Public</li>
                            </ul> 
                        </div>
                    </div>
                    <hr className="border-black pb-12" width="32px"/>
                    <h1 className="text-3xl pb-8">
                        Our Roadmap
                    </h1>
                    <div className="text-base pb-12">
                        <p className="pb-8">
                            We are excited to launch our proof of concept of the COVID-19 App Tracker Project, but here are other plans in the works. 
                        </p>
                        <p className="pb-4">
                            <strong>Proof of Concept Launch (May 18, 2020)</strong><br/> 
                            The following tasks have been completed for the proof of concept launch: 
                        </p>
                        <div className="pb-8">
                            <ul className="list-disc pl-4">
                                <li>COVID-19 App Tracker engine is fully functional</li>
                                <li>Implement automatic updates to the dashboard</li>
                                <li>Update website content</li> 
                            </ul> 
                        </div>
                        <p className="pb-4">
                            <strong>Version 1.0</strong><br/> 
                            The following tasks we aim to complete under Phase 1 work: 
                        </p>
                        <div>
                            <ul className="list-disc pl-4">
                                <li>Optimize the dashboard and website for mobile and desktop browsers</li>
                                <li>Automate Twitter updates (New App, Update, or Take Down from Google Play)</li>
                                <li>Allow for users to download database of applications identified under the project</li>
                            </ul> 
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default AboutPage;
