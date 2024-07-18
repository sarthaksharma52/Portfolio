import React from "react";
import Card from "./Card";
import projects from './Data/projects.json';
import SayHello from '../components/Sayhello';


const Projects = () => {
  return (
    <>
      <div className="project">
        <div className="text-gradient-projectheading">projects</div>
        <div className="text-gradient-projectcontent">
          I help startups and series A—D teams to establish a strong connection
          between their product and customers
        </div>
        <div className="projectrep">
          <div className="section1sayhello">
            <p className="hello">.project</p>
            <div className="hrsayhello">
              <hr />
            </div>
          </div>
        </div>
        <div className="row">
          {projects.map((data) => (
            <div key={data.id}>
              <Card
                title={data.title}
                year={data.year}
                imageSrc={data.imageSrc}
                liveLink={data.liveLink}
                sourceCodeLink={data.sourceCodeLink}
                cardColor={data.cardColor}
                textColor={data.textColor}
              />
            </div>
          ))}
        </div>
      </div>
      <SayHello/>
    </>
  );
};

export default Projects;
