import React from 'react';
import './css/style.css'
import './css/index.css'
import SocialMediaLink from './components/social_media_link.js'

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
        <header>
        <nav>
            <li className="title"> ROSHAN KUMARASWAMY </li>
            <li><a href=""> CONTACT ME </a></li>
            <li><a href="timeline.html"> TIMELINE </a></li>
            <li><a href="about.html"> ABOUT ME </a></li>
            <li><a href="index.html" style={{opacity: '1.0'}}> HOME </a></li>
        </nav>
        </header>
    <div className="main-block">
        <img src={require("./images/avatar.png")} alt="avatar" className="center fade-in one" />
        <div className="banner-text fade-in two">
            <h2>Hey there,</h2>
            <h1>I'm Roshan!</h1>
            <div className="links fade-in three">
                <SocialMediaLink color={'#0077B5'} link={"https://www.linkedin.com/in/roshan-kumaraswamy/"} i={<i className="fab fa-linkedin-in"/>} />
                <SocialMediaLink color={'#fc6d26'} link={"https://github.com/roshie548/"} i={<i className="fab fa-github"/>} />
                <SocialMediaLink color={'#e1306c'} link={"https://www.instagram.com/roshan.k_/"} i={<i className="fab fa-instagram"/>} />
                <SocialMediaLink color={'#00ab6c'} link={"https://medium.com/@roshie548"} i={<i className="fab fa-medium-m"/>} />
            </div>
        </div>
    </div>
    <div id="root"></div>
        </body>
    </div>
  );
}

export default App;
