import React from 'react'
import "./footer.css"
import { BsLinkedin } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiTableau } from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo' > FARIZ FADILA </a>
      <ul className='permalinks'>
        <li><a href="#"> Home </a></li>
        <li><a href="#about"> About </a></li>
        <li><a href="#skill"> Skills </a></li>
        <li><a href="#portfolio"> Portfolio </a></li>
        <li><a href="#contact"> Contact </a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.youtube.com/@farizfadila"><BsYoutube /></a>
        <a href="https://www.linkedin.com/in/farizfadila/"><BsLinkedin /></a>
        <a href="https://github.com/farizfadila"><FaGithub /></a>
        <a href="https://public.tableau.com/app/profile/farizfadila"><SiTableau /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Fariz Fadila. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer