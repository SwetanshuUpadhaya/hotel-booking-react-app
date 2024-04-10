import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static("dist"));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "therudrakshastays@gmail.com",
    pass: "sjlk fxuj gwto wysi",
  },
});

// Route to handle sending email for Query form
app.post("/api/send-query-email", (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "therudrakshastays@gmail.com",
    subject: "Therudrakshastays.com - New Query Submission!",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Route to handle sending email for BookNowForm
app.post("/api/send-booking-email", (req, res) => {
  const { name, email, phoneNumber, checkIn, checkOut, numberOfPeople } =
    req.body;

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "therudrakshastays@gmail.com",
    subject: "Therudrakshastays.com - New Booking Request!",
    text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nCheck In: ${checkIn}\nCheck Out: ${checkOut}\nNumber of People: ${numberOfPeople}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Route to handle sending email for Newsletter Subscription
app.post("/api/subscribe", (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: "your-email@gmail.com", // Your email address
    to: "therudrakshastays@gmail.com", // Your newsletter email address
    subject: "Therudrakshastays.com - New Newsletter Subscription!",
    text: `New subscription: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending subscription email:", error);
      res.status(500).send("Error subscribing");
    } else {
      console.log("Subscription email sent:", info.response);
      res.status(200).send("Subscribed successfully");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
