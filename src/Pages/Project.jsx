import Carousel from '../component/Carousel'

const Project = () => {
  return (
    <div className='carousel-wrapper'>
      <h1 id='project'>Project</h1>
    <div style={{ height: '350px', position: 'relative', display: "flex", justifyContent: "center" }}>
  <Carousel
    baseWidth={300}
    autoplay={true}
    autoplayDelay={10000}
    pauseOnHover={true}
    loop
    round={false}
  />
</div>

    </div>
  )
}

export default Project
