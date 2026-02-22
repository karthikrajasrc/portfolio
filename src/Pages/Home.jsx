import "./Pages.css"
import photo from "../assets/images/photo.svg"

const Home = () => {
  return (
    <>
      <div id='home'>
        <div className="Home-head">
          <h1 className="Home-name">KARTHIK RAJA RAVICHANDRAN</h1>
          <h4 className="Home-role">MERN Stack Developer &nbsp; | &nbsp; Junior Full Stack Developer</h4>
        </div>
        <div className="Home-buttons">
          <a
            href="mailto:[karthikrajarc@gmail.com]"
            target="_blank"
            rel="noopener noreferrer"
          ><button className="Home-buttons-btn">  E-Mail</button></a>
          <a href="tel:+918754635344" target="_blank" rel="noopener noreferrer">
            <button className="Home-buttons-btn">Call</button></a>
        </div>
        <div className="Home-abt-pht">
          <p className="Home-about">I'm a Certified MERN Stack Developer with 2+ years of IT experience in technical support and backend operations at TCS and Hexaware. I specialize in building full-stack applications using React, Node.js, Express, and MongoDB. I enjoy solving real-world problems and building scalable systems.</p>
          <img src={photo} alt="" className="Home-photo" />
        </div>
      </div>
    </>
  )
}

export default Home
