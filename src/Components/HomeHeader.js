import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Assuming you're using Font Awesome icons
import {
  faEnvelopeOpenText,
  faFacebook,
  faLinkedin,
  faTwitter,
  faGithub,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons"; // Import necessary icons
import {
  faFacebook as fabFacebook,
  faLinkedin as fabLinkedin,
  faTwitter as fabTwitter,
  faGithub as fabGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../Styles/HomeHeader.css";
import "../Styles/Common.css";
const HomeHeader = () => {
  return (
    <header id="home" className="jumbotron">
      <div className="homeHeader-container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h1>
              <span className="font-weight-bold primary text-responsive">
                Hello
              </span>
              <span className="font-weight-bold text-responsive comma primary">
                ,
              </span>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm">
            <h1>
              <span className="font-weight-bold text-responsive j">I'm</span>
              <span className="font-weight-bold text-responsive secondary">
                Arun
              </span>
              <span className="secondary">,</span>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm">
            <h1>
              <span className="font-weight-bold text-responsive j">
                Software
              </span>
              <span className="font-weight-bold text-responsive primary">
                Dev
              </span>
              <span className="font-weight-bold text-responsive j">
                Engineer.
              </span>
            </h1>
          </div>
        </div>
        <div className="row-2">
          <div className="col-xs-12 col-sm align-self-center mt-4">
            <p style={{ fontSize: "18px" }}>
              Full Stack Developer / Web Developer
            </p>
          </div>
        </div>
        <div className="row-3">
          <div className="col-xs-12 col-md align-self-center social mb-4">
            <a href="mailto:arunramasamy46@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
            </a>
            <a
              href="https://www.facebook.com/justin.a.bibier"
              className="p-2"
              target="_blank"
            >
              <FontAwesomeIcon icon={fabFacebook} />
            </a>
            <a
              href="www.linkedin.com/in/arun-ramasamy-033544247"
              className="p-2"
              target="_blank"
            >
              <FontAwesomeIcon icon={fabLinkedin} />
            </a>
            {/* <a
              href="https://twitter.com/Surya67431276?s=09"
              className="p-2"
              target="_blank"
            >
              <FontAwesomeIcon icon={fabTwitter} />
            </a> */}
            <a
              href="https://github.com/Arun-SoftwareDeveloper"
              target="_blank"
              className="p-2"
            >
              <FontAwesomeIcon icon={fabGithub} />
            </a>
          </div>
        </div>
        <div className="row-4">
          <div className="col-xs-12 d-flex justify-content-center con font-weight-bold mt-4">
            <p style={{ fontSize: "12px" }}>SCROLL DOWN</p>
          </div>
          <div className="col-xs-12 d-flex justify-content-center con font-weight-bold">
            <p style={{ fontSize: "18px" }}>
              <FontAwesomeIcon icon={faChevronDown} />
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
