import React from 'react';
import '../css/WorkBlock.scss';
import {Element} from "react-scroll/modules";
import ScrollAnimation from "react-animate-on-scroll";
import FeaturedItem from "./FeaturedItem";
import Card from "./Card";

import InfluxDashboard from "./../images/influx-dashboard.png";
import AnonymHome from "./../images/AnonymHome.png";
import AWSLogo from "./../images/Amazon_Web_Services_Logo.svg";
import InfluxLogo from "./../images/influxdata-logo--symbol--white.svg";
import PicScheduler from "./../images/picschedulerfeature.png";
import Constellation from "./../images/Constellation.png";

const WorkBlock = () =>
    <Element name="featuredblock">
        <div className="panel">
            <div className={"work"}>
                <ScrollAnimation animateIn="fade-in" animateOnce={true} offset={10}>
                    <h1>Work Experience</h1>
                </ScrollAnimation>
                <FeaturedItem style={{background: '#3c4d6b'}} name={"Amazon"} img={AWSLogo}>
                    <Card name={"Amazon Web Services"} role={"Software Development Engineer Intern, Summer 2020"}>
                        Built an in-house productivity application leveraging the following technologies:
                        <ul>
                            <li>Node.js, AWS Lambda, ElasticSearch, DynamoDB, CloudFront, and API Gateway for backend architecture.</li>
                            <li>React for the web-app front-end</li>
                        </ul>
                    </Card>
                </FeaturedItem>
                <FeaturedItem style={{background: `url(${InfluxDashboard})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} img={InfluxLogo}>
                    <Card name={"InfluxData"} role={"Software Engineer Intern, May - August 2019"}>
                        {/*InfluxData provides solutions for monitoring and handling time series data.*/}
                        <ul>
                            <li>Worked with an agile team and used Go to build InfluxData’s new scripting and querying language, Flux</li>
                            <li>Introduced and implemented multi-data source functionality for Flux, allowing end-users to easily
                                import and export data between external data stores and InfluxData’s time series database.</li>
                            <li>Wrote technical stock analysis and time series aggregate functions.</li>
                        </ul>
                    </Card>
                </FeaturedItem>
            </div>
            <div className={"projects"}>
                <h1>Featured Projects</h1>
                <FeaturedItem
                    style={{
                        background: `url(${AnonymHome})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"}}
                    isProject={true}>
                    {/*<Card style={{background: `url(${Anonym})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} name={"PicScheduler"}/>*/}
                </FeaturedItem>
                <FeaturedItem
                    style={{
                        background: `url(${Constellation})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"}}
                    isProject={true}>
                    {/*<Card style={{background: `url(${Anonym})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} name={"PicScheduler"}/>*/}
                </FeaturedItem>
                <FeaturedItem
                    style={{
                        background: `url(${PicScheduler})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"}}
                    isProject={true}>
                    {/*<Card style={{background: `url(${Anonym})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} name={"PicScheduler"}/>*/}
                </FeaturedItem>
            </div>
        </div>
    </Element>;

export default WorkBlock;