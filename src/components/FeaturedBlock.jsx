import React from 'react';
import '../css/FeaturedBlock.scss';
import {Element} from "react-scroll/modules";
import ScrollAnimation from "react-animate-on-scroll";
import Background from "./../images/picschedulerfeature.png";
import FeaturedItem from "./FeaturedItem";
import Card from "./Card";

import InfluxDashboard from "./../images/influx-dashboard.png";

const FeaturedBlock = () =>
    <Element name="featuredblock">
        <div className="panel">
            <ScrollAnimation animateIn="fade-in" animateOnce={true} offset={10}>
                <h1>Work Experience</h1>
            </ScrollAnimation>
            <FeaturedItem style={{background: '#3c4d6b'}} name={"Amazon"} img={require("./../images/Amazon_Web_Services_Logo.svg")}>
                <Card name={"Amazon Web Services"} role={"Software Development Engineer Intern"}>
                    Coming Summer 2020...
                </Card>
            </FeaturedItem>
            <FeaturedItem style={{background: `url(${InfluxDashboard})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} img={require("./../images/influxdata-logo--symbol--white.svg")}>
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

            {/*<h1>Featured Projects</h1>*/}
            {/*<Card style={{backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} name={"PicScheduler"}/>*/}
        {/*    'linear-gradient(to right, #13002D 0%, #9394FF 100%)'*/}
        </div>
    </Element>;

export default FeaturedBlock;