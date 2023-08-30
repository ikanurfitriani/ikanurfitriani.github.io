import React from 'react'
import "./contact.css"
import { MdOutlineEmail } from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>farizfadila@gmail.com</h5>
            <a href="mailto:farizfadila@gmail.com"> Send an email </a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Fariz Fadila</h5>
            <a href="https://www.linkedin.com/in/farizfadila/"> Connect with me </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}       
      </div>
    </section >
  )
}

export default Contact