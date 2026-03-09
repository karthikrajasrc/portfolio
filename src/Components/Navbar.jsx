import "./Navbar.css"
import { MdMenuOpen } from "react-icons/md";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";






const Navbar = () => {


  const handlemenu = () => {
    document.querySelector(".side-bar-links").classList.add("show");
  }

  const handlecancel = () => {
    document.querySelector(".side-bar-links").classList.remove("show");
  }

  const handleclose = () => {
    document.querySelector(".side-bar-links").classList.remove("show");
  }

  return (
    <>
      <div className="navbar-main">
        <a href="/Karthik%20Raja.pdf" download="Karthik_Raja_Resume.pdf" className="download-cv-btn-side"><FontAwesomeIcon icon={faDownload} /> &nbsp; Download CV</a>

        <MdMenuOpen size={28} className="menu-button" onClick={handlemenu} />
        <div className="side-bar-links">
          <HiOutlineArrowRightOnRectangle size={28} className="cancel-button"
            onClick={handlecancel} />
          <a href='#home' className="nav-links" onClick={handleclose}>Home</a>
          <a href='#skills' className="nav-links" onClick={handleclose}>Skills</a>
          <a href='#certification' className="nav-links" onClick={handleclose}>Certification</a>
          <a href='#project' className="nav-links" onClick={handleclose}>Project</a>
          <a href='#experience' className="nav-links" onClick={handleclose}>Experience</a>
          <a href='#contact' className="nav-links" onClick={handleclose}>Contact</a>
        </div>

        <div className="navbar-head">
          <a href="/Karthik%20Raja.pdf" download="Karthik_Raja_Resume.pdf" className="download-cv-btn" id="download-cv-btn-head"><FontAwesomeIcon icon={faDownload} /> &nbsp; Download CV</a>
          <a href='#home'>Home</a>
          <a href='#skills'>Skills</a>
          <a href='#certification'>Certification</a>
          <a href='#project'>Project</a>
          <a href='#experience'>Experience</a>
          <a href='#contact'>Contact</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
