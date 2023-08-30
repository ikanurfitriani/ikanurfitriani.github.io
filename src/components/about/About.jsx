import React from 'react'
import "./about.css"
import ME from '../../assets/fariz_about.jpg'
import { TbCertificate } from 'react-icons/tb'
import { MdOutlineAnalytics } from 'react-icons/md'
import {VscGraph} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbCertificate className='about__icon' />
              <h5>Certified </h5>
              <small>Google Data Analytics Professional</small>
            </article>

            <article className='about__card'>
              <MdOutlineAnalytics className='about__icon' />
              <h5>Analysis Projects</h5>
              <small>5+ Completed</small>
            </article>

            <article className='about__card'>
              <VscGraph className='about__icon' />
              <h5>Dashboard Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p>
            Saya mengikuti beberapa training program <i>data analyst</i>. Saya merupakan lulusan dari FGA DTS "Data Science for Beginner" dan Analitik Data Google Professional Certificate. Saat ini saya sedang belajar tentang <i>R</i> dan <i>Python</i> dengan fokus <i>Data Analytics</i> dan <i>Data Science</i>.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About