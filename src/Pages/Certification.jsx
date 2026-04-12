import guvi from "../assets/images/guvi.svg"
import algonive from "../assets/images/algonive.svg"
import mern from "../assets/images/MERN.png"

const Certification = () => {
  return (
    <>
      <div id='certification'>
        <div>
          <h1 className='certify-header'>Certification & Internship</h1>
        </div>
        <div className="certify-guvi">
          <div className="certify-guvi-logo">
            <img src={guvi} alt="" />
            <p className="certify-guvi-logo-text-dup">MERN Full Stack Developer (DECEMBER 2025 - MARCH 2026)</p>
        </div>
          <div className="certify-guvi-logo-text">
            <div id="certify-list">
              <p>MERN Full Stack Developer (DECEMBER 2025 - MARCH 2026)</p>
              </div>
            <div className="certify-guvi-logo-text-list">
          <ul>
            <li>Engineered scalable full-stack applications using the MERN stack architecture.</li>
            <li>
              Implemented secure authentication, API routing, and backend logic using Express & Node.js.
            </li>
            <li>
              Built responsive and interactive UI components using React with hooks and state management.
            </li>
            <li>
              Designed and managed NoSQL databases using MongoDB with efficient CRUD operations.
            </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <img src={mern} alt="" className="certify-mern" />
        </div>
        <div className="certify-alg">
          <div className="certify-alg-logo">
            <img src={algonive} alt="" />
            <p className="certify-alg-logo-text-dup">Full Stack Developer INTERNSHIP (FEBRUARY 2026 - MARCH 2026)</p>
          </div>
          <div className="certify-alg-logo-text">
            <div id="certify-list">
              <p>Full Stack Developer INTERN (FEBRUARY 2026 - MARCH 2026)</p>
            </div>
            <div className="certify-alg-logo-text-list">
              <ul>
                <li> Delivered key features for E-commerce and Task Manager applications in a real-time development environment.</li>
                <li>
                  Managed database schemas and ensured smooth frontend–backend communication using REST APIs.
                </li>
                <li>
                  Improved code quality through debugging, refactoring, and performance tuning.
                </li>
                <li>
                  Gained hands-on experience in deploying and maintaining full-stack web applications.
                </li>
              </ul>
            </div>
          </div>
        </div>
        
    </div>
    </>
  )
}

export default Certification
