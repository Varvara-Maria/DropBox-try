import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className="footer_info">
          <ul className='info_block'>
            <li className='info_title'>DropBox</li>
            <li><a href="/">Програма для комп'ютера</a></li>
            <li><a href="/">Мобільний додаток</a></li>
            <li><a href="/">Інтеграція в Dropbox</a></li>
            <li><a href="/">Функції</a></li>
            <li><a href="/">Рішення</a></li>
            <li><a href="/">Не просто місце для файлів</a></li>
            <li><a href="/">Безпека</a></li>
            <li><a href="/">Розширений доступ</a></li>
          </ul>


          <ul className='info_block'>
            <li className='info_title'>Продукти </li>
            <li><a href="/">Plus</a></li>
            <li><a href="/">Professional</a></li>
            <li><a href="/">Business</a></li>
            <li><a href="/">Enterprise</a></li>
            <li><a href="/">HelloSign</a></li>
            <li><a href="/">DocSend</a></li>
            <li><a href="/">Тарифні плани</a></li>
            <li><a href="/">Обновлення продукту</a></li>
          </ul>



          <ul className='info_block'>
            <li className='info_title'>Підтримка </li>
            <li><a href="/">Довідковий центр</a></li>
            <li><a href="/">Зв'язатися з нами</a></li>
            <li><a href="/">Конфіденційність та умови</a></li>
            <li><a href="/">Політика використання файлів cookie</a></li>
            <li><a href="/">Параметри CCPA та файлів cookie</a></li>
            <li><a href="/">Карта сайту</a></li>
            <li><a href="/">Навчальні ресурси</a></li>
          </ul>


          <ul className='info_block'>
            <li className='info_title'>Спільнота </li>
            <li><a href="/">Блог</a></li>
            <li><a href="/">Розробникам</a></li>
            <li><a href="/">Форуми спільноти</a></li>
            <li><a href="/">Запросіть друзів</a></li>
          </ul>


          <ul className='info_block'>
            <li className='info_title'>Компанія </li>
            <li><a href="/">О Dropbox</a></li>
            <li><a href="/">Офіційні реквізити</a></li>
            <li><a href="/">Вакансії</a></li>
            <li><a href="/">Для інвесторів</a></li>
            <li><a href="/">ESG</a></li>
            <li><a href="/">Партнери</a></li>
          </ul>

        </div>

        <div className="footer_icons">
          <i class="fab fa-twitter"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-youtube"></i>

        </div>
      </div>
    </div>
  )
}

export default Footer