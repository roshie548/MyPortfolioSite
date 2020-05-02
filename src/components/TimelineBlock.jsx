import React from 'react';
import '../css/TimelineBlock.scss'
import TimelineItem from './TimelineItem'
import {Element} from "react-scroll/modules";
import ScrollAnimation from "react-animate-on-scroll";

const TimelineBlock = () =>
    <Element name="timeline">
    <div className="timeline-block">
        <div className="timeline-header">
            <h2 className='center fade-in one'> More than just the product: </h2>
            <h1 className='center fade-in one'> It's about the Journey </h1>
        </div>

        <div className="timeline-container fade-in three">
            {items}
        </div>
    </div>
    </Element>;

const objs = [
    new TimelineObj('orange', 'GitHub', 'January - April 2019', 'Lead a team to create a Chrome extension web app that rewards students for studying', "https://github.com/roshie548/constellation.io", "Check it out on GitHub"),
    new TimelineObj('orange', 'GitHub', 'October 2019', 'Won Docusign API Prize at CalHacks 2019 by creating an Android app for student subletting', "https://github.com/roshie548/calhacks-2019-sublet-app", "Check it out on GitHub"),
    new TimelineObj('red', 'Internship', 'May 2019 - Present', "Began working at InfluxData as a Software Engineering Intern", "https://github.com/influxdata/flux", "See what I worked on"),
    new TimelineObj('orange', 'GitHub', 'April 2019', "Started building my website", "https://github.com/roshie548/MyPortfolioSite", "Check it out on GitHub"),
    new TimelineObj('orange', 'GitHub', 'March 2019', "Machine Learning tinkering with the Heart Disease UCI dataset", "https://github.com/roshie548/Heart-Disease-ML", "Check it out on GitHub"),
    new TimelineObj('#03b454', 'Google Play', 'December 2018', "Built PicScheduler, an Android app for creating calendars with OCR", "https://play.google.com/store/apps/details?id=com.roshan.android.picscheduler", "Download from Google Play"),
    new TimelineObj('#262626', 'News', 'July - August 2017', "Founded and taught the Coding Club at the Land O Lakes Library", "http://lakerlutznews.com/lln/?p=48617", "Read about it"),
    new TimelineObj('#00c2ff', 'App Store', 'June 2016', "Published a follow-up app to my study app series: AP European History - Prep Me! Game", "https://itunes.apple.com/us/app/ap-european-history-prep-me-game/id1135262577?ls=1&mt=8", "Download from the App Store"),
    new TimelineObj('#00c2ff', 'App Store', 'August 2015', "Released my first app: Prep Me! - AP World History. Went on the win the 2015 Congressional App Challenge for Florida District 12", "https://itunes.apple.com/us/app/prep-me-ap-world-history/id1028928149?mt=8", "Download from the App Store")
];

const items = objs.map((item) => {
   return (
           <TimelineItem color={item.color} type={item.type} time={item.time} desc={item.desc} link={item.link} linkText={item.linkText}/>)
});

function TimelineObj(color, type, time, desc, link, linkText) {
    this.color = color;
    this.type = type;
    this.time = time;
    this.desc = desc;
    this.link = link;
    this.linkText = linkText;
}

export default TimelineBlock;