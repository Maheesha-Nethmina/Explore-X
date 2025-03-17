/* eslint-disable react/prop-types */
import './Hero.css'

function Hero(props) {
   

  return (
    <div>
        <div className={props.className}>
            <img src={props.image} alt="heroimg" className={props.heroimg} />
        </div>
        <div className='herotext'>
          <h1>{props.title}</h1>
          <p>{props.text}</p>

        </div>
        <div className='orderbtn'>
          <button type="submit" className='order-btn'>
             <a href={props.url}>{props.btnname}</a>
          </button>

        </div>
        
    </div>
  )
}

export default Hero