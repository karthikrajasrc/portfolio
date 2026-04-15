import movie from "../assets/images/moviereview.svg"
import yuganlogo from "../assets/images/logoyugans.svg"
import vibenet from "../assets/images/vibenet.svg"
import "./Pages.css"

const DEFAULT_ITEMS = [
    {
      title: 'Client: Yugans Product (Freelancing)',
    description: 'Designed and developed a real-time eCommerce platform for the client Yugans Product, with secure JWT-based user authentication, dynamic cart management, and a complete order management system. Monitored website uptime and performance using UptimeRobot, achieving a 90% reduction in load time through performance optimisations.',
      tech: 'MERN Stack, Tailwind CSS',
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
      tech: 'MERN Stack, Tailwind CSS',
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
      title: 'Movie Review Web App',
      description: 'Built a full-stack Movie Review application using the MERN stack and used TMDB API to fetch movie data, featuring secure authentication & authorization, dynamic movie data integration, and user-generated ratings/comments stored in MongoDB. Implemented RESTful APIs with Node.js & Express and deployed with performance monitoring using UptimeRobot.',
      tech: 'MERN Stack, Tailwind CSS',
     liveDemo: (
    <a href="https://moviesreviewe.netlify.app/" target="_blank">
      Live Demo
    </a>
  ),Repolink: (
    <a href="https://github.com/karthikrajasrc/Moviereviewer" target="_blank">
      Repo link
    </a>
  ), 
      id: 3,
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
