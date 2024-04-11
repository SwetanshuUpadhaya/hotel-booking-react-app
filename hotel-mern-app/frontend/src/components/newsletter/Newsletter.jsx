import React, { useState } from "react";
import axios from "axios";
import "./newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://therudrakshastays.vercel.app/api/subscribe", {
        email,
      });
      setShowConfirmation(true);
      setLoading(false);
      setEmail(""); // Clear the email input after successful subscription
    } catch (error) {
      console.error("Error subscribing:", error);
      setLoading(false);
      alert("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <div className="newsletter">
      <div className="newsletter_content">
        <h2>Subscribe now to receive valuable updates about our property.</h2>
        <form onSubmit={handleSubmit} className="newsletter_form">
          <div className="newsletter_input">
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn newsletter_btn">
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </form>
        <p>
          The potential insight available through big data, to better understand
          what is happening and why, as well as the possibility to achieve real
          personalisation in online commerce and relationships between hotels
          and their guests.
        </p>
      </div>
      {showConfirmation && (
        <div className="popup">
          <div className="popup-content">
            <h2>Subscribed</h2>
            <p>Thank you for subscribing to our newsletter!</p>
            <button className="btn" onClick={() => setShowConfirmation(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
