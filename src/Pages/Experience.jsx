import tcs from "../assets/images/tcs.svg"
import hexaware from "../assets/images/hexa.svg"

const Experience = () => {
  return (
    <>
      <div id='experience'>
        <div className='exp-head'>
          <h1>Experience</h1>
        </div>


        <div className='exp-main'>
          <div>
            <div className="exp-tcs">
              <div className="exp-tcs-img-text">
                <img src={tcs} alt="" className="exp-tcs-image"/>
                <div className="exp-tcs-text">
                  <p><strong>TATA CONSULTANCY SERVICES</strong></p>
                  <p><strong>Role:</strong> Technical Support Associate</p>
                  <p><strong>Duration:</strong> October 2023 – October 2025</p>
                  <p><strong>Location:</strong> Chennai, Tamil Nadu</p>
                </div>
              </div>
              <div className="exp-tcs-list">
              <p><strong>Key Responsibilities:</strong></p>
              <ul className="exp-tcs-list-text">
                <li>Provided technical assistance to end-users for hardware, software, and network issues.</li>
                <li>Troubleshot and resolved client problems through remote support and ticket management.</li>
                <li>Collaborated with cross-functional teams to ensure timely resolution of technical issues.</li>
                <li>Documented technical procedures and user guides for internal knowledge base.</li>
                </ul>
              </div>
            </div>
          </div>


          <div>
            <div className="exp-hexa">
              <div className="exp-hexa-img-text">
              <img src={hexaware} alt="" className="exp-hexa-image"/>
              <div className="exp-hexa-text">
              <p><strong>HEXAWARE TECHNOLOGIES LIMITED</strong></p>
              <p><strong>Role:</strong> Backend-Support</p>
              <p><strong>Duration:</strong> October 2025 – January 2026</p>
              <p><strong>Location:</strong> Chennai, Tamil Nadu</p>
              </div>
              </div>
              <div className="exp-hexa-list">
              <p><strong>Key Responsibilities:</strong></p>
              <ul>
                <li>
                  Performed backend verification and validation of data to ensure accuracy, completeness, and compliance with
                  organizational standards.
                </li>
                <li>
                  Worked on internal systems and databases to review, update, and maintain records efficiently.
                </li>
                <li>Worked with backend systems and structured data validation processes.
                  </li>
                  <li>supported backend operations by identifying discrepancies, analyzing data issues, and coordinating with relevant teams for resolution.
                  </li>
              </ul>
            </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Experience
