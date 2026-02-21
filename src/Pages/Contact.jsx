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
            <img src={linkedin} alt="linkedin" />
            <p>LinkedIn</p>
          </div>
          <div className="contact-whatsapp">
            <img src={whatsapp} alt="whatsapp" />
            <p>Whatsapp</p>
          </div>
          <div className="contact-email">
            <img src={email} alt="email" />
            <p>Email</p>
          </div>
          <div className="contact-github">
            <img src={github} alt="github" />
            <p>Github</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
