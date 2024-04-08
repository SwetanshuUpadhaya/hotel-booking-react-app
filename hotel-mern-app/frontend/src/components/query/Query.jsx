import React, { useState } from "react";
import axios from "axios";
import imageSrc from "../../assets/contact.png";
import "./query.css";

const Query = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "https://therudrakshastays.vercel.app/api/send-query-email",
        formData
      );
      setShowConfirmation(true);
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting query:", error);
      setLoading(false);
      alert("Failed to submit query");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="query-section">
        <h2>If You Have Any Query! Contact Us!</h2>
        <div className="query-container">
          <div className="query-image">
            <img src={imageSrc} alt="Contact Image" style={{ width: "100%" }} />
          </div>
          <div className="query-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone no."
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Leave us a message"
                ></textarea>
              </div>
              <div>
                <button className="btn" type="submit">
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showConfirmation && (
        <div className="popup">
          <div className="popup-content">
            <h2>Query request Sent</h2>
            <p>Thank you for getting in touch!</p>
            <button className="btn" onClick={() => setShowConfirmation(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Query;
