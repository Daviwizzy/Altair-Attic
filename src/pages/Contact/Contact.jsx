import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const emailData = {
      to_name: "Altair Attic Limited",
      from_name: data.name,
      email: data.email,
      number: data.phone,
      message: data.message,
    };

    try {
      const response = await emailjs.send(
        "service_hoyq6xf",
        "template_2zbt1dc",
        emailData,
        "xTVbm4gOtEOKY8Lx9"
      );

      console.log("Email sent:", response);

      reset(); // Reset form fields
      setSuccessMessage("Your message has been sent successfully!");
    } catch (error) {
      console.error("Email send error:", error);
    }
  };

  const handlePhoneChange = (value) => {
    setValue("phone", value);
  };

  return (
    <div className="contact-form-wrapper paddings flex-col-center">
      <div className="contact-header flex-center">
        <div className="contact-images">
          <img src="/contact.jpeg" alt="Phone" className="contact-image" />
          <img
            src="/contact2.jpeg"
            alt="Customer Support"
            className="contact-image"
          />
        </div>
        <div className="contact-details flex-col-start">
          <h2 className="primary-text">Contact Details</h2>
          <p className="secondary-text">
            <i className="fas fa-envelope"></i> hello@altair-attic.com
          </p>
          <p className="secondary-text">
            <i className="fas fa-phone"></i> +2347077195098
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="contact-form flex-col-start"
      >
        <h2 className="primary-text">Contact us</h2>
        <p className="secondary-text">
          Got questions or ideas? We'd love to hear from you!
        </p>
        <input
          {...register("name", { required: true })}
          placeholder="Enter Name"
          className="input-field"
        />
        {errors.name && <span className="error-message">Name is required</span>}
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          type="email"
          placeholder="Enter Email"
          className="input-field"
        />
        {errors.email && (
          <span className="error-message">Valid email is required</span>
        )}
        <PhoneInput
          country={"ng"}
          onChange={handlePhoneChange}
          inputClass="input-field"
          containerClass="phone-input-container"
        />
        <input type="hidden" {...register("phone", { required: true })} />
        {errors.phone && (
          <span className="error-message">Phone number is required</span>
        )}
        <textarea
          {...register("message", { required: true })}
          placeholder="Type message..."
          className="textarea-field"
        ></textarea>

        <button type="submit" className="button" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        <br/>
        {errors.message && (
          <span className="error-message">Message is required</span>
        )}
        {successMessage && (
          <span className="success-message">{successMessage}</span>
        )}
      </form>
    </div>
  );
};

export default Contact;
