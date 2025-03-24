import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Welcome from './Components/Welcome/Welcome'
import Search from './Components/Search/Search'
import HeroImg from './assets/image04.jpg'
import About from './Components/About/About'
import Destinations from './Components/Destinations/Destinations'
import Tour from './Components/Tours/Tour'
import Whyus from './Components/Whyus/Whyus'
import Footer from './Components/Footer/Footer'
import BlogSection from './Components/BlogSection/BlogSection'
import Discount from './Components/Discount_section/Discount'
import Gallery from './Components/Gallery/Gallery'

//by nema

function App() {
 
  return (
    <>
      <Welcome/>
      <Navbar/>
      <Hero
      classname="hero"
      image={HeroImg}
      title="Explore the World Like Never Before with Explore X"
      text="Explore the world’s wonders with ExploreX—your adventure starts here."
      url="/menu"
      btnname="Start Exploring"
      />
      <Search/>
      <About/>
      <Destinations/>
      <Discount/>
      <Tour/>
      
      <Whyus/>
      <Gallery/>
      <BlogSection/>
      <Footer/>



      
    </>
  )
}

export default App
