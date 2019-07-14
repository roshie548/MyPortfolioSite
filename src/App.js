import React from 'react';
import './css/style.css'
import Nav from './components/Nav.jsx'
import MainBlock from "./components/MainBlock";
import AboutBlock from "./components/AboutBlock";
import TimelineBlock from "./components/TimelineBlock";

function App() {
  return (
    <div className="App">
        <head>
        <title>roshan kumaraswamy</title>
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet"/>
        </head>
        <body>
            <Nav/>
            <MainBlock/>
            <AboutBlock/>
            <TimelineBlock/>
            <div id="root"></div>
        </body>
    </div>
  );
}

export default App;
