import React from 'react';
import './MainScreen.css'

function MainScreen() {
  return (
    <div className='main-screen'>
        <div className='main-info'>
            <div className='lines'>
                <div className='line'></div>
                <div className='line-white'></div>
                <div className='line'></div>
                <div className='line-white '></div>
            </div>
            <p className='main-title'>Тримайте. Синхронізуйте. Діліться. Підписуйте. Все просто.</p>
            <p className='main-text'>Новий пакет Dropbox Professional + eSign: місце зберігання, електронні підписи та інші корисні функції.</p>
            <button className='header-button'>Пізнайте більше<i class="fas fa-angle-right"></i></button>
        </div>
            <img src="http://fotorelax.ru/wp-content/uploads/2016/02/Beautiful-photos-and-pictures-on-different-topics-01.jpg" alt="" />
    </div>

  )
}

export default MainScreen