import movie from "../assets/images/moviereview.svg"
import yuganlogo from "../assets/images/logoyugans.svg"
import vibenet from "../assets/images/vibenet.svg"
import "./Pages.css"

const DEFAULT_ITEMS = [
    {
      title: 'Client: Yugans Product',
    description: 'Designed and developed a real-time eCommerce platform for the client Yugans Product, with secure JWT-based user authentication, dynamic cart management, and a complete order management system. Monitored website uptime and performance using UptimeRobot, achieving a 90% reduction in load time through performance optimisations.',
      tech: 'MERN, Tailwind CSS',
     liveDemo: (
    <a href="https://yugansproduct.in/" target="_blank">
      Live Demo
    </a>
  ),Repolink: (
    <a href="https://github.com/karthikrajasrc/yugans_product" target="_blank">
      Repo link
    </a>
  ),
      id: 1,
      image: 
        (<img src={ yuganlogo} />)
  },
    {
      title: 'VibeNet – Social Media Platform',
    description: 'Built a full-stack social media platform with real-time messaging via Socket.io, JWT-based authentication, post creation with likes and comments, follow functionality, and real-time notifications. Integrated UptimeRobot to ping the backend at regular intervals, preventing Render’s free-tier sleep and ensuring consistently fast response times for end users.',
      tech: 'MERN, Tailwind CSS',
     liveDemo: (
    <a href="https://vibeenet.netlify.app/" target="_blank">
      Live Demo
    </a>
  ),Repolink: (
    <a href="https://github.com/karthikrajasrc/vibenet" target="_blank">
      Repo link
    </a>
  ),
      id: 2,
      image: 
        (<img src={ vibenet} />)
    },
    {
      title: 'Moview Review',
      description: 'Built a responsive movie browsing application integrating the TMDB API for real-time movie data including ratings, genres, and descriptions. Implemented advanced search, filter functionality, and dynamic routing using React Router for a seamless experience across all devices also integrated Tailwind CSS for a visually appealing and responsive design.',
      tech: 'React JS, Tailwind CSS',
     liveDemo: (
    <a href="https://moviesreviewerr.netlify.app/" target="_blank">
      Live Demo
    </a>
  ),Repolink: (
    <a href="https://github.com/karthikrajasrc/Movie_review" target="_blank">
      Repo link
    </a>
  ),
      id: 2,
      image: 
        (<img src={ movie} />)
    }
  ];


const Project = () => {

  

  return (
    <div>
      <div id="project">Projects</div>
      <div className="projects-grid">
        {DEFAULT_ITEMS.map((item) => (
          <div key={item.id} className="project-card">
            <div className="project-image">
              {item.image}
            </div>
            <div className="project-content">
              <h3 className="project-title">{item.title}</h3>
              <p className="project-tech">Tech Used: {item.tech}</p>
              <p className="project-description">{item.description}</p>
              <div className="project-live-demo">
              <p>{item.liveDemo}</p>
              <p>{item.Repolink}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="project-viewmore">
        <a href="https://github.com/karthikrajasrc/" target="_blank" ><button className="project-viewmore-btn">View More Projects </button></a>
      </div>
    </div>
  )
}

export default Project
