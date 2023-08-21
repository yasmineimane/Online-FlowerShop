import React from 'react'
import './about.css'
import AboutUs from '../../assets/AboutUs.jpg'
import AboutUs2 from '../../assets/AboutUs2.png'

const About = () => {
  return (
    <section id='about'>
        <div div className='about__content'>
          <div className="aboutUs-image">
            <img src={AboutUs} alt="about" />
          </div>
          <div className='aboutUs'>
            <h1>About Us</h1>
            <p>Pookal is a flower workshop where bouquets are created,
              charged with love and good mood , giving people smiles
              and incredible emotions.
            </p>
          </div>
        </div>
        < div className='about__content'>
          <div className='aboutUs-content'>
            <h3>Fresh Flower</h3>
            <h1>From Our Fram to Your Table</h1>
            <p>
              Flowers are carefully selected and handpicked by expert
              florists to bring smile and happiness. 
            </p>
            <a href="#shop" className='btn about-btn'>Shop Now</a>
          </div>
          <div className='aboutUs-image image2'>
            <img src={AboutUs2} alt="aboutus2" />
          </div>
        </ div>
    </section>
  )
}

export default About