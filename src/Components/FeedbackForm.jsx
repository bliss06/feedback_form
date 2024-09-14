import React, { useState } from "react";
import "./FeedbackForm.css"; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const confirmationMessage = `
    Name: ${formData.name}
    Email: ${formData.email}
    Feedback: ${formData.feedback}
    `;

    const isConfirmed = window.confirm(
      `please confirm your details:\n\n${confirmationMessage}`
    );

    if (isConfirmed) {
      console.log("Feedback submitted successfully!", formData);

      setFormData({
        name: "",
        email: "",
        feedback: "",
      });

      alert("Thank you for your feedback!");
    }
  };

  return (
    <>
      <nav>Tell Us What You Think</nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          placeholder="Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
