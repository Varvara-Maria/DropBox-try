import React from 'react';
import './ForWhat.css';

function ForWhat() {
  return (
    <div className='usefor'>
        <div className='container'>
            <p className='usefor__tittle'>Навіщо ви будете використовувати Dropbox?</p>
            <div className='item-usefor'>
                <div className='item-usefor__block'>
                    <img src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Segmentation_1@2x.png.transform/80q/img.jpg" alt="" />
                    <div className='item-usefor__info'>
                        <p className='item-usefor__tittle'>У робочих цілях</p>
                        <p className='item-usefor__text'>Ефективно співпрацюйте з колегами з робочої групи та клієнтами, узгоджено працюєте над проектами та безпечно зберігайте всі дані в одному місці.</p>
                        <button className='button'>Отримати DropBox для роботи<i class="fas fa-angle-right"></i></button>
                    </div>
                </div>
                <div className='item-usefor__block'>
                <img src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Segmentation_2@2x.png.transform/80q/img.jpg" alt="" />
                    <div className='item-usefor__info'>
                        <p className='item-usefor__tittle'>В особистих цілях</p>
                        <p className='item-usefor__text'>Зберігайте у безпеці все важливе для вас та вашої родини в одному місці з наданням загального доступу. Створюйте резервні копії файлів у хмарі, надавайте спільний доступ до фотографій, відео тощо.</p>
                        <button className='button'>Отримати DropBox для особистого користування<i class="fas fa-angle-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForWhat