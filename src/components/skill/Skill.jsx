import React from 'react'
import "./skill.css"
import {BsPatchCheckFill} from 'react-icons/bs'
import {RiFileExcel2Fill} from 'react-icons/ri'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {SiGooglecolab} from 'react-icons/si'
import {SiRstudio} from 'react-icons/si'
import {SiTableau} from 'react-icons/si'
import {SiPowerbi} from 'react-icons/si'
import {FaRProject} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'

const Skill = () => {
  return (
    <section id='skill'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container skill__container">
        <div className="data__analyst__tools">
          <h3>Data Analyst Tools</h3>
          <div className="tools__content__2rows">

            <article className='tools__details__2rows'>
              <RiFileExcel2Fill className="tools__details-icon"/>
              <div>
                <h4>Microsoft Excel</h4>
                <small className='text-dark'>Experienced</small>
              </div>
            </article>

            <article className='tools__details__2rows'>
              <AiFillGoogleCircle className="tools__details-icon"/>
              <div>
                <h4>Google Bigquery</h4>
                <small className='text-dark'>Intermediate</small>
              </div>
            </article>

            <article className='tools__details__2rows'>
              <SiGooglecolab className="tools__details-icon"/>
              <div>
                <h4>Google Colab</h4>
                <small className='text-dark'>Intermediate</small>
              </div>
            </article>

            <article className='tools__details__2rows'>
              <SiRstudio className="tools__details-icon"/>
              <div>
                <h4>RStudio</h4>
                <small className='text-dark'>Intermediate</small>
              </div>
            </article>

            <article className='tools__details__2rows'>
              <SiTableau className="tools__details-icon"/>
              <div>
                <h4>Tableau</h4>
                <small className='text-dark'>Intermediate</small>
              </div>
            </article>

            <article className='tools__details__2rows'>
              <AiFillGoogleCircle className="tools__details-icon"/>
              <div>
                <h4>Google Data Studio</h4>
                <small className='text-dark'>Intermediate</small>
              </div>
            </article>

            <article className='tools__details__2rows'>
              <SiPowerbi className="tools__details-icon"/>
              <div>
                <h4>Power BI</h4>
                <small className='text-dark'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>
        {/* END OF DATA ANALYST TOOLS */}

        <div className="programming__language">
        <h3>Programming Language</h3>
          <div className="tools__content__1row">

            <article className='tools__details__1row'>
              <FaRProject className="tools__details-icon"/>
              <div>
                <h4>R</h4>
                <small className='text-dark'>Intermediate</small><br/>
                <small className='text-dark'><b>Library:</b> tidyverse, data.table</small>
              </div>
            </article>

            <article className='tools__details__1row'>
              <div>
                <FaPython className="tools__details-icon"/>
              </div>
              <div>
                <h4>Python</h4>
                <small className='text-dark'>Intermediate</small><br/>
                <small className='text-dark'><b>Library:</b> pandas, polars, seaborn</small>
              </div>
            </article>

          </div>
        </div>
        {/* END OF PROGRAMMING LANGUAGE */}

      </div>
    </section>
  )
}

export default Skill