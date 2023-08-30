import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Cyclistic (Bike Share) Analysis (R)',
    github: 'https://github.com/farizfadila/google-data-analytics/blob/main/Course%208/studi_kasus_cyclistic.ipynb',
    demo: 'https://youtu.be/9O-H62EhaZ8'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Rock, Paper, and Scissors Image Classification (Python)',
    github: 'https://github.com/farizfadila/BDT2022/blob/966f5b87a747388ac370bb6d5d8369fd4a4fd83d/Belajar%20Machine%20Learning%20untuk%20Pemula/Rock_Paper_Scissors_Image_Classification.ipynb',
    demo: 'https://github.com/farizfadila/BDT2022/blob/966f5b87a747388ac370bb6d5d8369fd4a4fd83d/Belajar%20Machine%20Learning%20untuk%20Pemula/Rock_Paper_Scissors_Image_Classification.ipynb'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Covid-19 EDA and Time Series Forecasting (R)',
    github: 'https://github.com/farizfadila/analisis_covid19/blob/e9a705fffcb0bb0bdeba31cbc86ea6bd82ecb3b7/Analisis_Data_COVID_19_di_Indonesia.ipynb',
    demo: 'https://github.com/farizfadila/analisis_covid19/blob/e9a705fffcb0bb0bdeba31cbc86ea6bd82ecb3b7/Analisis_Data_COVID_19_di_Indonesia.ipynb'
  },
  {
    id: 4,
    image: IMG4,
    title: 'World CO2 Emissions and Energy Use Dashboard (Tableau)',
    github: '#',
    demo: 'https://public.tableau.com/app/profile/farizfadila/viz/WorldCO2EmissionsandEnergyUse/Dashboard1'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Dashboard Peta Sebaran Covid 19 per Provinsi di Indonesia (Tableau)',
    github: '#' ,
    demo: 'https://public.tableau.com/app/profile/farizfadila/viz/PetaSebaranCovid19perProvinsidiIndonesia/PetaSebaranCovid19perProvinsidiIndonesia'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Sales Performance Report (SQL)',
    github: 'https://github.com/farizfadila/DQLAB/blob/516147c2e7ec1c258a51165c059819838f3c8a1c/Project%20Data%20Analysis%20for%20Retail:%20Sales%20Performance%20Report/sales_performance_report.sql',
    demo: 'https://github.com/farizfadila/DQLAB/blob/516147c2e7ec1c258a51165c059819838f3c8a1c/Project%20Data%20Analysis%20for%20Retail:%20Sales%20Performance%20Report/sales_performance_report.sql'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'> Github </a>
                  <a href={demo} className='btn btn-primary' target='_blank'> Visit </a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section >
  )
}

export default Portfolio