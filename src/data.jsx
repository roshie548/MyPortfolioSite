import React from 'react';
import AWSLogo from "./images/Amazon_Web_Services_Logo.svg";
import InfluxDashboard from "./images/influx-dashboard.png";
import AnonymHome from "./images/AnonymHome.png";
import InfluxLogo from "./images/influxdata-logo--symbol--white.svg";
import PicScheduler from "./images/picschedulerfeature.png";
import Constellation from "./images/Constellation.png";
import AdvFreeze from "./images/AdvFreeze.jpg"

export const workExperiences = [
    {
        name: "Amazon Web Services",
        role: "Software Development Engineer Intern, Summer 2020",
        img: AWSLogo,
        style: {background: '#3c4d6b'},
        description: <>
            Built an in-house productivity application leveraging the following technologies:
            <ul>
                <li>Node.js, AWS Lambda, ElasticSearch, DynamoDB, CloudFront, and API Gateway for backend architecture.</li>
                <li>React for the web-app front-end</li>
            </ul>
        </>
    },
    {
        name: "InfluxData",
        role: "Software Engineer Intern, May - August 2019",
        img: InfluxLogo,
        style: {
            background: `url(${InfluxDashboard})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        },
        description: <ul>
            <li>Worked with an agile team and used Go to build InfluxData’s new scripting and querying
                language, Flux
            </li>
            <li>Introduced and implemented multi-data source functionality for Flux, allowing end-users
                to easily
                import and export data between external data stores and InfluxData’s time series
                database.
            </li>
            <li>Wrote technical stock analysis and time series aggregate functions.</li>
        </ul>
    }
]

export const projects = [
    {
      name:"AdvFreeze",
      technologies: ["Python", "PyTorch", "Google Compute Engine"],
      description: "A novel adversarial training process which greatly increases robustness in image classifiers " +
                  "without sacrificing accuracy on clean images.",
      img: AdvFreeze,
      ghLink: "https://github.com/roshie548/AdvFreeze",
      projectLink: "https://github.com/roshie548/AdvFreeze/blob/main/report.pdf"
    },
    {
        name: "Anonym",
        technologies: ["React", "Blockstack API", "Heroku"],
        description:
            "An anonymous, decentralized blogging platform powered by blockchain with a content moderation scheme to " +
            "weed out hateful speech.",
        img: AnonymHome,
        ghLink: "https://github.com/roshie548/Anonym",
        projectLink: "https://anonym-radiks.herokuapp.com/"
    },
    {
        name: "Constellation",
        technologies: ["React", "Firebase", "Chrome API"],
        description:
            "A rewards-based productivity app for students. Keep track of how many minutes you've studied, " +
            "unlock new constellations, and stay on task by blocking your online distractions.",
        img: Constellation,
        ghLink: "https://github.com/roshie548/constellation.io",
        projectLink: "https://chrome.google.com/webstore/detail/constellationio/ibidmkkkcmllngiogmnccgclkfehbkfp"
    },
    {
        name: "PicScheduler",
        technologies: ["Android Studio", "Google ML Kit"],
        description:
            "An app for importing class schedules into your calendar easily by using optical character recognition" +
            "to automatically create calendar events from a picture of your schedule.",
        img: PicScheduler,
        ghLink: "https://github.com/roshie548/picscheduler",
        projectLink: "https://play.google.com/store/apps/details?id=com.roshan.android.picscheduler&hl=en_US&gl=US"
    }
]
