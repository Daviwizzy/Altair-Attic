import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import "./Contactpg.css";

const Contactpg = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [recaptchaError, setRecaptchaError] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    if (!data.recaptcha) {
      setRecaptchaError(true);
      return;
    }

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
      setRecaptchaError(false);
    } catch (error) {
      console.error("Email send error:", error);
    }
  };

  const handlePhoneChange = (value) => {
    setValue("phone", value);
  };

  const handleRecaptchaChange = (value) => {
    setValue("recaptcha", value);
    setRecaptchaError(false);
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
        {errors.message && (
          <span className="error-message">Message is required</span>
        )}
        <ReCAPTCHA
          sitekey="6LctmQYqAAAAADJCigSgo_GI7KfumMnlTRvmZJFS"
          onChange={handleRecaptchaChange}
          className="recaptcha-container"
        />
        <button type="submit" className="button" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {recaptchaError && (
          <span className="error-message">Please complete the reCAPTCHA</span>
        )}
        {successMessage && (
          <span className="success-message">{successMessage}</span>
        )}
      </form>
    </div>
  );
};

export default Contactpg;
