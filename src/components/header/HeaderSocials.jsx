import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiTableau} from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.youtube.com/@farizfadila" target="_blank"><BsYoutube/> </a>
            <a href="https://www.linkedin.com/in/farizfadila/" target="_blank"><BsLinkedin/> </a>
            <a href="https://github.com/farizfadila" target="_blank"><FaGithub/> </a>
            <a href="https://public.tableau.com/app/profile/farizfadila" target="_blank"><SiTableau/> </a>
        </div>
    )
}
export default HeaderSocials