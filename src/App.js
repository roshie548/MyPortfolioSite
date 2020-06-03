import React from 'react';
import './css/style.scss'
import Nav from './components/Nav.jsx'
import MainBlock from "./components/MainBlock";
import AboutBlock from "./components/AboutBlock";
import TimelineBlock from "./components/TimelineBlock";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import FeaturedBlock from "./components/FeaturedBlock";

function App() {
  return (
    <div className="App">
        <head>
        <title>roshan kumaraswamy</title>
        <link href="css/style.scss" rel="stylesheet" type="text/css" />
        </head>
        <body>
        <Nav/>
            <MainBlock/>
            <AboutBlock/>
            <FeaturedBlock/>
            <TimelineBlock/>
            <div id="root"></div>
        </body>
    </div>
  );
}

export default App;
