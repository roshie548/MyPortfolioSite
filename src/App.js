import React from 'react';
import './css/style.css'
import Nav from './components/Nav.jsx'
import MainBlock from "./components/MainBlock";
import AboutBlock from "./components/AboutBlock";

function App() {
  return (
    <div className="App">
        <head>
        <title>roshan kumaraswamy</title>
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <link href="css/index.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        </head>
        <body>
            <Nav/>
            <MainBlock/>
            <AboutBlock/>
            <div id="root"></div>
        </body>
    </div>
  );
}

export default App;
