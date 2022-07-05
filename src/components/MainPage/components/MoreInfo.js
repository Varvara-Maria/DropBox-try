import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './MoreInfo.css';

function MoreInfo() {
  return (
    <div className='more-info'>
        <div className='signature'>
            <div className='dropbox'>
                <h3>HelloSign</h3><h4>, компания </h4><h3>  Dropbox</h3>
            </div>
            <p className='title'>Додайте в свої робочі процеси електронни підписи</p>
            <p className='text'>HelloSign - це простий і надійний спосіб відправлети і запитувати юридисно зобов'язуючі підписи онлайн</p>
            <div className='sign-buttons'>
                <NavLink activeClassName="active" to='/'    className='sign-button'>Детальніше</NavLink>
                <NavLink activeClassName="active" to='/' className='sign-button'>Спробувати безкоштовно</NavLink>
            </div>
            <img 
                src="https://assets-global.website-files.com/61c0a8113e6c0db0dcedae5a/61c0a8113e6c0d7580edb755_esign%402x%20(1).svg" 
                to ='https://www.hellosign.com/products/hellosign?utm_source=dropbox&utm_medium=referral&utm_campaign=hp-productplank-fullplank-v2' 
                alt="" 
            />
        </div>
        <div className='links'>
            <div className='dropbox'>
                <h3>DocSend</h3><h4>, компания </h4><h3>  Dropbox</h3>
            </div>
            <p className='title'>Відправьте силки и укладайте угоди</p>
            <p className='text'>Використовуйте DocSend, щоб оптимізувати самі важливі ділові документи, діліться і керуйте ними, просто відправ силку на документ</p>
            <div className='sign-buttons'>
                <NavLink activeClassName="active" to='/'    className='sign-button'>Детальніше</NavLink>
                <NavLink activeClassName="active" to='/' className='sign-button'>Спробувати безкоштовно</NavLink>
            </div>
            <img 
                src="https://www.docsend.com/wp-content/themes/marketing-site-theme/dist/images/Product_Analytics_screen_dbx.jpeg" 
                to ='https://www.hellosign.com/products/hellosign?utm_source=dropbox&utm_medium=referral&utm_campaign=hp-productplank-fullplank-v2' 
                alt="" 
            />
        </div>
    </div>
  )
}

export default MoreInfo