import React from 'react'
import './contact.css'
import {FiMapPin} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlinePhone} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <h2>Contact Us</h2>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <FiMapPin/>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>4671 SidiYahiya <br />Algeria</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <HiOutlineMail/>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>Pooka@gmail.com</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <AiOutlinePhone/>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+123765489</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form >
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name='' required />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name='' required />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required></textarea>
              <span>Type Your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name='' className='btn' required value="Send" />
            </div>
          </form>
        </div>
      </div>




        {/* <form action="" className='contact'>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <label htmlFor="email">Email</label>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn'> Send Message</button>
        </form> */}
    </section>
  )
}

export default Contact