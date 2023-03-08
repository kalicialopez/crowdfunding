import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

//CSS
// import "./ContactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xoqzwyyj");
  if (state.succeeded) {
    return <p>Thank you for getting in touch with EducAid!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>
        Want to know more about how EducAid can help you? Please do not hesitate
        to get in touch
      </h2>
      <div className="contact-form">
        <div>
          <label>Name:</label>
          <input id="name-text" type="text" placeholder="" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message here"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
