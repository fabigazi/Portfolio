import * as React from "react";
import './contact.css'

import Input from "../../components/input/Input";

function ImageSection() {
  return (
    <div className="contact-image-container">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ceea14481c75b6bd7a3af4703bb106bbfb52b42288d7803c850ba5701db15d2?apiKey=c18181df491445f49c3752cb0e8829d9&" alt="Your image description" className="contact-image" />
    </div>
  );
}



function ContactForm() {
  const inputFields = [
    { label: "Name*", type: "text" },
    { label: "Email ID*", type: "email" },
    { label: "Message*", type: "textarea" },
  ];

  return (
    <form className="contact-form">
      {inputFields.map((field, index) => (
        <Input key={index} label={field.label} type={field.type} />
      ))}
      <button type="submit" className="submit-button">
        Send
      </button>
    </form>
  );
}

function Contact() {
  return (
    <>
      <main className="main-container">
        <section className="content-wrapper">
          <ImageSection />
          <ContactForm />
        </section>
      </main>
    </>
  );
}

export default Contact;