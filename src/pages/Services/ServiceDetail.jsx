import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../utils/slider.json";
import useHeaderColor from "../../hooks/useHeaderColor";
import "./ServiceDetail.css";
import Contact from "../../components/Contact/Contact";


const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = data[id];
  const headerColor = useHeaderColor();

  if (!service) {
    return <div>Service not found</div>;
  }

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div
      className="service-detail-container"
      style={{ background: headerColor }}
    >
      <img src={service.image} alt={service.name} className="service-image" />
      <div className="service-header">
        <h1 className="service-title">{service.name}</h1>
        {service.price && <p className="service-price">${service.price}</p>}
      </div>
      <p className="service-description">{service.detail}</p>
      {service.additionalInfo && (
        <div className="additional-info">
          <h2>Key Features:</h2>
          <ul className="additional-info-list">
            {service.additionalInfo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <button className="book-visit-button button" onClick={handleContactClick}>
        Contact Us
      </button>
      
    </div>
  );
};

export default ServiceDetail;
