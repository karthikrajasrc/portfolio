import movie from "../assets/images/moviereview.svg"
import invoice from "../assets/images/invoice.svg"
import taskmanager from "../assets/images/taskmanager.svg"
import yuganlogo from "../assets/images/logoyugans.svg"
import "./Pages.css"

const DEFAULT_ITEMS = [
    {
      title: 'Client: Yugans Product',
      description: 'Tech Used: MERN Stack with RazorPay (Freelancing Project)',
     liveDemo: (
    <a href="https://yugansproduct.in/" target="_blank">
      Live Demo
    </a>
  ),
      id: 1,
      image: 
        (<img src={ yuganlogo} />)
    },
    {
      title: 'Moview Review',
      description: 'Tech Used: React JS, Tailwind CSS, TMDB API, Resposive',
     liveDemo: (
    <a href="https://moviesreviewerr.netlify.app/" target="_blank">
      Live Demo
    </a>
  ),
      id: 2,
      image: 
        (<img src={ movie} />)
    },
    {
      title: 'Invoice Builder',
      description: 'Tech Used: React JS, Tailwind CSS (Freelancing Project)',
       liveDemo: (
    <a href="https://invoicesbuilder.netlify.app/" target="_blank">
      Live Demo
    </a>
  ),
      id: 3,
      image: 
        (<img src={ invoice} />)
    },
      {
      title: 'Task Manager',
      description: 'Tech Used: HTML, CSS, JavaScript, (Intern Project)',
       liveDemo: (
    <a href="https://algonivetasksmanager.netlify.app/" target="_blank">
      Live Demo
    </a>
  ),
      id: 4,
      image: 
        (<img src={ taskmanager} />)
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
              <p className="project-description">{item.description}</p>
              <div className="project-live-demo">{item.liveDemo}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
