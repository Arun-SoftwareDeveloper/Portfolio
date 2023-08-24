import React, { useState } from "react";
import bmc from "../Images/bmc-icon.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/Contact.css";
import { Toast } from "bootstrap";
import BuyMeACoffee from "./BuyMeACoffee";

const Contact = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleImageClick = () => {
    setPopupVisible(!popupVisible);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        toast.success("Thanks for your submission!");
      } else {
        const data = await response.json();
        if (data.errors) {
          toast.error(data.errors.map((error) => error.message).join(", "));
        } else {
          toast.error("Oops! There was a problem submitting your form");
        }
      }
    } catch (error) {
      toast.error("Oops! There was a problem submitting your form");
    }
  };

  return (
    <div className="contact-container" id="contact">
      {/* Rest of your component code */}
      <div className="row mb-4 row-content">
        <div className="col-12 col-sm-6 text-white">
          <h1 className="font-weight-bold con">Contact</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-7 in text-white">
          <form
            id="my-form"
            action="https://formspree.io/f/xnqkdjer"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="comment"
                name="comment"
                style={{ height: "100px" }}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <button
                id="my-form-button"
                className="btn btn-dark bt"
                type="submit"
              >
                Submit
              </button>
            </div>
            <p id="my-form-status"></p>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" />
      <div className="buymeacoffee-container">
        <div className="image-container" onClick={handleImageClick}>
          <img src={bmc} alt="Buy Me a Coffee" />
        </div>
        {popupVisible && (
          <div className="popup-container">
            <div className="popup">
              <button className="close-button" onClick={handleImageClick}>
                Close
              </button>
              <iframe
                title="Buy Me a Coffee"
                src="https://www.buymeacoffee.com/arunramasamy"
                width="700"
                height="300"
                style={{
                  border: "none",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                }}
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
