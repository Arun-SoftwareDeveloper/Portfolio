import React, { useState } from "react";
import "../Styles/Certifications.css";
import AI from "../Images/GuviCertification - 2k8969OT02W1H3zp63.png";

function Certifications() {
  const certificationsData = [
    {
      name: "Mern-Stack Development (IIT MADRAS)",
      imageUrl: AI,
    },
    {
      name: "AI INDIA 2.0",
      imageUrl:
        "https://www.ip-group.com/media/2430/sertifikat-med-mann-seo.png",
    },
    {
      name: "Web Designing Certification",
      imageUrl:
        "https://www.ip-group.com/media/2430/sertifikat-med-mann-seo.png",
    },
  ];

  const [selectedCertification, setSelectedCertification] = useState(null);

  const handleCertificationClick = (index) => {
    setSelectedCertification(index === selectedCertification ? null : index);
  };

  return (
    <div className="certifications-container" id="certifications">
      <h2 className="certifications-header">Certifications</h2>
      <div className="certifications-list">
        {certificationsData.map((certification, index) => (
          <div
            key={index}
            className={`certification-item ${
              selectedCertification === index ? "active" : ""
            }`}
            onClick={() => handleCertificationClick(index)}
          >
            <p>{certification.name}</p>
            {selectedCertification === index && (
              <img src={certification.imageUrl} alt={certification.name} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
