import React, { useRef } from "react";
import "./Contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0727v3t", "template_mpzrzxi", form.current, {
        publicKey: "-GecjTTxsBEKbgIqe",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactpageTitle">Contact Me</h1>
        <span className="contactDes">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="user_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="user_email"
          />
          <textarea
            rows="5"
            placeholder="Your Msg"
            className="msg"
            name="user_msg"
          ></textarea>
          <button type="submit" className="submitBtn" value="Send">
            Sumbit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="" className="link" />
            <img src={TwitterIcon} alt="" className="link" />
            <img src={YouTubeIcon} alt="" className="link" />
            <img src={InstagramIcon} alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
