import React, { useState, useEffect, useRef } from "react";
import { project } from "../../data/project/project";
import project_image from "../../assets/images/project-image.PNG";
import arrow_next from "../../assets/images/arrow-next.png";
import Arrow from "../arrow/arrow";
import "./project.scss";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Project = () => {
  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);

  const handleSlide = () => {
    setCount((prevCount) => (prevCount + 1) % project.length);
  };

  const handleClick = () => {
    handleSlide();
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(handleSlide, 4500);
  };

  useEffect(() => {
    intervalRef.current = setInterval(handleSlide, 4500);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const { project_title, project_desc, project_tools_desc, stack } =
    project[count];

  return (
    <div className="projec_container" id="project">  
      <section className="project-section">
        <div className="left">
          <img src={project_image} alt="project img" />
          <button className="btn-next" onClick={handleClick}>
            <img src={arrow_next} alt="arrow next" className="arrow-next" />
          </button>
        </div>

        <div className="right">
          <div className="project">
            <div className="project_link">
              <h1>Projects</h1>
              <a href="" className="">view <ArrowOutwardIcon/></a>
              
                <img
                  src={arrow_next}
                  alt="arrow next"
                  className="arrow_next_small_screen"
                  onClick={handleClick}
                />
            </div>
               
            <h2 className="project_title">{project_title}</h2>
              
            <div className="project_dec">
              <p>{project_desc}</p>
              <br />
              <p>{project_tools_desc}</p>
            </div>
            <div className="stack">
              {stack.map((item, index) => (
                <div className="stack_text" key={index}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="model">
              {project.map((item, index, i) => {
                return (
                  <div
                    key={index}
                    className={`display ${
                      count === index ? "active" : "neutral"
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Arrow 
      activeClass="active"
      to="footer"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      />
    </div>
  );
};

export default Project;
