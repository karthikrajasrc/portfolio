import linkedin from "../assets/images/linkedin.svg"
import whatsapp from "../assets/images/whatsapp.svg"
import email from "../assets/images/gmail.svg"
import github from "../assets/images/github.svg"

const Contact = () => {
  return (
    <>
      <div id='contact'>
        <h1 className='contact-head'>Contact</h1>
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
              href="mailto:[karthikrajarc@gmail.com]"
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
