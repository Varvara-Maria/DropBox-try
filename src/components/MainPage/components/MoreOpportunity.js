import React from 'react';
import './MoreOpportunity.css';

function MoreOpportunity() {
  return (
    <div className='more-opportunity'>
        <div className='container'>
            <div className='opportunity-tittle'>Більше можливостей для роботи з файлами</div>
            <div className='opportunity-info'>
                <div className='opportunity-info-about'>
                    <img src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/icons/syncing.svg" alt="" />
                    <p className='opportunity-info-tittle'>Зберігання та синхронізація файлів</p>
                    <p className='opportunity-info-text'>Забезпечте надійний захист усіх своїх файлів, їх оновлення до останніх версій та доступність з будь-якого пристрою.</p>
                </div>
                <div className='opportunity-info-about'>
                    <img src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/icons/share.svg" alt="" />
                    <p className='opportunity-info-tittle'>Загальний доступ</p>
                    <p className='opportunity-info-text'>Швидко надсилайте файли будь-якого розміру будь-кому, навіть якщо в одержувача немає облікового запису Dropbox.</p>
                </div>
                <div className='opportunity-info-about'>
                    <img src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/icons/shield.svg" alt="" />
                    <p className='opportunity-info-tittle'>Безпека</p>
                    <p className='opportunity-info-text'>Забезпечте конфіденційність своїх файлів за допомогою кількох рівнів захисту, які надає служба, якій довіряють мільйони.</p>
                </div>
                <div className='opportunity-info-about'>
                    <img src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/icons/comment.svg" alt="" />
                    <p className='opportunity-info-tittle'>Сумісна праця</p>
                    <p className='opportunity-info-text'>Керуйте завданнями, відстежуйте оновлення файлів та синхронізуйте дані зі своїми робочими групами та клієнтами.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MoreOpportunity