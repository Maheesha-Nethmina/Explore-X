import './About.css'
import Navbar from '../Components/Navbar/Navbar'
import Welcome from '../Components/Welcome/Welcome'
import Hero_second from '../Components/Hero_second/hero_second'
import HeroImg from '../assets/hero14.jpg'


function About() {
  return (
    <>
    <Welcome/>
    <Navbar/>
    <Hero_second
    image={HeroImg}
    title="Discover the World with Us"
    description="Your next adventure starts here! Explore stunning destinations, experience new cultures, and create unforgettable memories with us"
    
    
    />
    

    </>
  )
}

export default About