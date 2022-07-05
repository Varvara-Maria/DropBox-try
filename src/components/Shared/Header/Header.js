import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <div className='header'>
      <div className='header-about'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Dropbox_logo_2017.svg/2560px-Dropbox_logo_2017.svg.png' />
        <div className='menu'>
          <ul className ="topmenu">
            <li><NavLink activeClassName="active" to="/" className='header-text'>Чому саме Dropbox?</NavLink>
            <div className="submenu why">
              <ul>
                <h4>Огляд</h4>
                <li>Історії наших клієнтів</li>
                <li>Інтеграція</li>
                <li>Не просто місце для файлів</li>
              </ul>
              <ul>
                <h4>По галузях</h4>
                <li>Освіта</li>
                <li>СМІ</li>
                <li>Будова</li>
                <li>Роздрібна торгівля</li>
                <li>Технології</li>
              </ul>
              <ul>
                <h4>По типу користувача</h4>
                <li>Окремий користувач</li>
                <li>Сім'я</li>
                <li>Фріланcери</li>
                <li>Робоча група</li>
                <li>Enterprise</li>
              </ul>
            </div>
            </li>
            <li><NavLink activeClassName="active" to="/" className='header-text'>Функції</NavLink>
            <div className="submenu function">
              <ul>
                <li>Загальний доступ до файлів</li>
                <li>Зберегти і розмістити</li>
                <li>Синхронізація пристроїв</li>
                <li>Спростіть роботу з електронними підписами</li>
                <li>Захист і безпека</li>
                <li>Ефективна робота</li>
              </ul>
              <ul>
                <li>Віддалена робота</li>
                <li>Спільна робота</li>
                <li>Організація робочої групи</li>
                <li>Відправити і відслідкувати</li>
                <li>Автоматичне резервне копіювання</li>
              </ul>
            </div>
            </li>
            <li><NavLink activeClassName="active" to="/" className='header-text'>Тарифи</NavLink></li>
          </ul>
        </div>
      </div>
      <div className='header-login'>
        <div className='menu'>
          <ul className ="topmenu">
            <li><NavLink activeClassName="active" to="/" className='header-text'>Контактна інформація</NavLink>
            <div className="submenu contact">
              <ul>
                <h4>Підтримка</h4>
                <li>Довідковий центр</li>
                <li>Форуми спільноти</li>
              </ul>
              <ul>
                <h4>Зверніться до відділу продаж</h4>
                <li>Еле. пошта</li>
              </ul>
            </div>
            </li>

            <li><NavLink activeClassName="active" to="/" className='header-text'>Скачайте програму</NavLink>
            <div className="submenu download">
              <ul>
                <li>Програма для комп'ютера</li>
                <li>Мобільний додаток</li>
              </ul>
            </div>
            </li>
            <li><NavLink activeClassName="active" to="/" className='header-text'>Регістрація</NavLink></li>
            <li><NavLink activeClassName="active" to="/" className='header-text'>Увійти</NavLink></li>
            <button className='button'>Початок роботи <i class="fas fa-angle-right"></i></button>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Header