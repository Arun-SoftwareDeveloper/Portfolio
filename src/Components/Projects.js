import React from "react";
import "../Styles/Projects.css";
import { FaBootstrap, FaCss3, FaReact } from "react-icons/fa";
import { DiNodejs, DiMongodb } from "react-icons/di";
const Projects = () => {
  return (
    <div className="project-container" id="project">
      <div className="row mb-4 row-content">
        <div className="col-12 col-sm-6 text-white">
          <h1>
            <span className="font-weight-bold con project-title">Projects</span>
          </h1>
        </div>
      </div>

      <div className="row" id="blogcard">
        {/* Project 1 */}
        <div className="col-12 col-md-4 mt-4">
          <div className="card">
            <img
              src="https://play-lh.googleusercontent.com/FXkylsEELGN8yAGqLW47uF9W2vQkKHniD4PrPYnw0ctI-SQ3ivr5l9M7fG0Itq5KeA"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                TIC-TAC-TOE
                <span>
                  <FaReact color="skyblue" />
                  <FaCss3 color="dodgerblue" />
                  <FaBootstrap color="blue" />
                </span>
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Simple Game build by using ReactJs
              </h6>
              <p className="">
                "Built a classic Tic Tac Toe game using React, allowing two
                players to take turns marking X and O on a 3x3 grid. Implemented
                win-checking logic and a responsive design for enjoyable
                gameplay."
              </p>
              <a
                href="https://tic-tac-toe-in-react-js.netlify.app/"
                className="btn btn-dark rounded-pill"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go Live
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-12 col-md-4 mt-4">
          <div className="card">
            <img
              src="https://cdn.mos.cms.futurecdn.net/3eSHhTo4WUYwXJUpMCxEUo.jpg"
              className="card-img-top "
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                ZEN STUDENT DASHBOARD
                <span>
                  <FaReact color="skyblue" />
                  <DiMongodb color="green" />
                  <DiNodejs color="green" />
                </span>
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                ZenClass Student DashBoard
              </h6>
              <p className="">
                "Successfully developed the ZenClass Student Dashboard—a
                comprehensive platform for students. Seamlessly assignment
                submissions, and communication features, providing an enhanced
                learning experience."
              </p>
              <a
                href="https://graceful-meerkat-3c2749.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Go Live
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-12 col-md-4 mt-4">
          <div className="card">
            <img
              src="https://appinventiv.com/wp-content/uploads/sites/1/2018/05/API-Development-Guide.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Url Shortening Application (API call)
                <span>
                  <i className="devicon-react-original colored"></i>
                  <i className="devicon-javascript-plain colored"></i>
                </span>
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                URL shortening application
              </h6>
              <p className="">
                "Designed and executed a URL shortening application, simplifying
                the long URLs into Short URLs."
              </p>
              <a
                href="https://wondrous-praline-52f37d.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark rounded-pill"
              >
                Go Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
