import React from 'react'
import SliderApp from './components/SliderApp'
import Slider from './components/SliderApp'
import './OurClients.css'


function OurClients() {
  return (
    <div className='clients'>
        <div className='container'>
            <p className='clients__tittle'>Нам довіряють понад 600 мільйонів користувачів та 500 тисяч робочих груп</p>
            <a className='clients_link' href='/'>Читайте історії інших наших клієнтів</a>
                <SliderApp />
        </div>
    </div>
  )
}

export default OurClients