import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Card = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bqxpgal', 'template_lxdjivq', form.current, 'ROA9CP1U0yQkfk5rW')
      .then((result) => {
          alert("Feedback sent successfully!");
          form.current.reset();
      }, (error) => {
          alert("An error occurred. Please try again.");
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Your Name" className="form-control mb-2" required />
      <input type="email" name="user_email" placeholder="Your Email" className="form-control mb-2" required />
      <textarea name="message" placeholder="Your Feedback" className="form-control mb-2" rows="3" required />
      <button type="submit" className="btn btn-info w-100">Send</button>
    </form>
  );
};

export default Card;
