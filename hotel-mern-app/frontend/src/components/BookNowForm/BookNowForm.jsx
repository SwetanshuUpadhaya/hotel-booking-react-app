import React, { useState } from "react";
import "./booknowform.css";
import axios from "axios"; // Import CSS file for styling

const BookNowForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    checkIn: "",
    checkOut: "",
    numberOfPeople: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showCustomConfirmation, setShowCustomConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowCustomConfirmation(true);
  };

  const handleCustomConfirmation = async (confirmed) => {
    setShowCustomConfirmation(false);
    if (confirmed) {
      setLoading(true);
      try {
        await axios.post("/api/send-booking-email", formData);
        setShowConfirmation(true);
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          checkIn: "",
          checkOut: "",
          numberOfPeople: "",
        });
      } catch (error) {
        console.error("Error sending booking request:", error);
        setLoading(false);
        alert("Failed to send booking request");
      }
    }
  };

  return (
    <>
      <form className="book-now-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            YOUR NAME
            <input
              className="form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </label>
          <label className="form-label">
            YOUR EMAIL
            <input
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </label>
          <label className="form-label">
            PHONE NO
            <input
              className="form-input"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="Enter you phone no"
            />
          </label>
          <label className="form-label">
            CHECK IN
            <input
              className="form-input"
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
          </label>
          <label className="form-label">
            CHECK OUT
            <input
              className="form-input"
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
            />
          </label>
          <label className="form-label">
            NUMBER OF PEOPLE
            <input
              className="form-input"
              type="number"
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleChange}
              required
              placeholder="Number of people"
            />
          </label>
        </div>
        <div className="submit-button">
          <button className="submit-btn" type="submit">
            {loading ? "Booking..." : "Book Now"}
          </button>
        </div>
      </form>
      {showConfirmation && (
        <div className="popup">
          <div className="popup-content">
            <h2>Booking Confirmed</h2>
            <p>Your booking request has been sent successfully.</p>
            <button className="btn" onClick={() => setShowConfirmation(false)}>
              Close
            </button>
          </div>
        </div>
      )}
      {showCustomConfirmation && (
        <div className="popup">
          <div className="popup-content">
            <h2>Confirm Booking</h2>
            <p>Are you sure you want to submit the booking request?</p>
            <div className="custom-popup-buttons">
              <button
                className="btn confirm"
                onClick={() => handleCustomConfirmation(true)}
              >
                Confirm
              </button>
              <button
                className="btn cancel"
                onClick={() => handleCustomConfirmation(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookNowForm;
