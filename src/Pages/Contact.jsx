import linkedin from "../assets/images/linkedin.svg"
import whatsapp from "../assets/images/whatsapp.svg"
import email from "../assets/images/gmail.svg"
import github from "../assets/images/github.svg"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); 

    emailjs.sendForm(
      "service_vuu8jyi",
      "template_5x568f8",
      form.current,
      "ZbshYwba4vjsrMmbH"
    )
    .then(() => {
      console.log("Message sent successfully!");
    }
    ).catch( (error) => {
      console.log(error.text);
    })
    .finally(() => {
    setLoading(false); 
  });

    emailjs.send(
      "service_vuu8jyi",
      "template_6lw8ute",
      {
        name: form.current.name.value,
        email: form.current.email.value
      },
      "ZbshYwba4vjsrMmbH"
    );

    e.target.reset();
  };


  return (
    <>
      <div id='contact'>
        <h1 className='contact-head'>Contact</h1>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div>
            <h2 className="contact-get">Get in Touch with me!</h2>
            <div className="contact-name-email">
            <div className="contact-input">
              <label>Name</label>
              <input type="text" name="name" placeholder="Enter your name" required/>
            </div>
            <div className="contact-input">
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter your email" required/>
              </div>
              </div>
            <div className="contact-input">
              <label className="contact-input-label">Message</label>
              <textarea name="message" placeholder="Enter your message" required/>
            </div>
            <div className="contact-btn-main">
              <button className="contact-btn" type="submit" disabled={loading}>
  {loading ? "Submitting..." : "Submit"}
</button>
            </div>
        </div>
        </form>
        <div className='contact-main'>
          <div className="contact-linkedin">
            <a
              href="https://www.linkedin.com/in/karthik-raja-r-rc"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-linkedin"
            >
            <img src={linkedin} alt="linkedin"/>
              <p>LinkedIn</p>
            </a>
          </div>
          <div className="contact-whatsapp">
            <a
              href="https://wa.me/918754635344"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp"
            >
            <img src={whatsapp} alt="whatsapp" />
            <p>Whatsapp</p>
            </a>
          </div>
          <div className="contact-email">
            <a
              href="mailto:karthikrajarc@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-email"
            >
            <img src={email} alt="email" />
            <p>Email</p>
            </a>
          </div>
          <div className="contact-github">
            <a
              href="https://github.com/karthikrajasrc"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-github"
            >
            <img src={github} alt="github" />
            <p>Github</p>
            </a>
          </div>
        </div>
        <div className="footer-main">
          <footer>
            <p>Copyright © 2026 Karthik Raja. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Contact
