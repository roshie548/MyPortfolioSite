import React from 'react';
import '../css/FeaturedBlock.scss';
import {Element} from "react-scroll/modules";
import ScrollAnimation from "react-animate-on-scroll";
import Background from "./../images/picschedulerfeature.png";
import FeaturedItem from "./FeaturedItem";
import Card from "./Card";

const FeaturedBlock = () =>
    <Element name="featuredblock">
        <div className="panel">
            <h1>Work Experience</h1>
            <FeaturedItem style={{background: '#3c4d6b'}} name={"Amazon"} img={require("./../images/PinClipart.com_rolling-pin-clip-art_3584545.png")}>
                <Card name={"Amazon"} role={"Software Development Engineer Intern"}>
                    Coming Summer 2020...
                </Card>
            </FeaturedItem>
            <FeaturedItem style={{background: 'linear-gradient(to right, #13002D 0%, #9394FF 100%)'}} name={"InfluxData"} img={require("./../images/influxdata-logo--symbol--white.svg")}>
                <Card name={"InfluxData"} role={"Software Engineer Intern"}>
                    InfluxData provides solutions for monitoring and handling time series data.
                </Card>
            </FeaturedItem>

            <h1>Featured Projects</h1>
            {/*<Card style={{backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} name={"PicScheduler"}/>*/}
        </div>
    </Element>;

export default FeaturedBlock;