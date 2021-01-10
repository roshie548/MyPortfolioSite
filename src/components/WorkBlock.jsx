import React from 'react';
import '../css/WorkBlock.scss';
import {Element} from "react-scroll/modules";
import ScrollAnimation from "react-animate-on-scroll";
import FeaturedItem from "./FeaturedItem";
import {workExperiences, projects} from "../data";

const WorkBlock = () =>
    <Element name="featuredblock">
        <div className="panel">
            <div className={"work"}>
                <ScrollAnimation animateIn="fade-in" animateOnce={true} offset={10}>
                    <h1>Work Experience</h1>
                </ScrollAnimation>
                {workExperiences.map((work, index) => {
                    return (
                        <FeaturedItem
                            style={work.style}
                            img={work.img}
                            name={work.name}
                            role={work.role}
                            description={work.description}
                            index={index}
                        />
                    )
                })}
            </div>
            <div className={"projects"}>
                <h1>Featured Projects</h1>
                {projects.map((project, index) => {
                    return (
                        <FeaturedItem
                            style={{
                                background: `url(${project.img})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center"}}
                            isProject={true}
                            name={project.name}
                            technologies={project.technologies}
                            description={project.description}
                            index={index}
                            ghLink={project.ghLink}
                            projectLink={project.projectLink}
                        />
                    )
                })}
            </div>
        </div>
    </Element>;

export default WorkBlock;