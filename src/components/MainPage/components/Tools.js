import React from 'react';
import './Tools.css'


function Tools() {
  return (
    <div className='tools'>
        <div className='containeri'>
            <p className='tools__tittle'>Воспользуйтесь Dropbox по максимуму — подсоедините любимые инструменты</p>
            <a className='tools_link' href='/'>Узнайте подробнее о возможностях интеграции Dropbox с нашими партнерами</a>
            <div className='item-tools'>
                <div className='item-tools__info'>
                    <img src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_1@2x.png.transform/80q/img.png" alt="" />
                    <p className='item-tools__tittle'>Zoom</p>
                    <p className='item-tools__text'>Розширіть можливості віддаленої взаємодії за допомогою миттєвих зустрічей та відеозаписів Zoom.</p>
                </div>
                <div className='item-tools__info'>
                    <img src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_2@2x.png.transform/80q/img.png" alt="" />
                    <p className='item-tools__tittle'>Slack</p>
                    <p className='item-tools__text'>Поєднуйте спілкування в Slack та вміст Dropbox, щоб синхронізувати команди.</p>
                </div>
                <div className='item-tools__info'>
                    <img src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_3@2x.png.transform/80q/img.png" alt="" />
                    <p className='item-tools__tittle'>Adobe Creative Cloud</p>
                    <p className='item-tools__text'>Зручно та безпечно надсилайте файли з Adobe Photoshop клієнтам та постачальникам.</p>
                </div>
                <div className='item-tools__info'>
                    <img src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_4@2x.png.transform/80q/img.png" alt="" />
                    <p className='item-tools__tittle'>Microsoft Office</p>
                    <p className='item-tools__text'>Зручний доступ, редагування та надання доступу до документів Office онлайн у Dropbox.</p>
                </div>

                <div className='item-tools__info'>
                    <img src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_5@2x.png.transform/80q/img.png" alt="" />
                    <p className='item-tools__tittle'>Google Workspace</p>
                    <p className='item-tools__text'>Створюйте документи, таблиці та презентації Google, а також редагуйте їх та обмінюйтеся ними за допомогою Dropbox.</p>
                </div>
                <div className='item-tools__info'>
                    <img src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_6@2x.png.transform/80q/img.png" alt="" />
                    <p className='item-tools__tittle'>Trello</p>
                    <p className='item-tools__text'>Співпрацюйте у командних проектах у Trello із вмістом Dropbox.</p>
                </div>
                <div className='item-tools__info'>
                    <img src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_7@2x.png.transform/80q/img.png" alt="" />
                    <p className='item-tools__tittle'>Canvas</p>
                    <p className='item-tools__text'>Завантажуйте курсові роботи або завдання прямо з Dropbox до Canvas.</p>
                </div>
                <div className='item-tools__info'>
                    <img src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_8@2x.png.transform/80q/img.png" alt="" />
                    <p className='item-tools__tittle'>Asana</p>
                    <p className='item-tools__text'>Відстежуйте всю діяльність вашої робочої групи за допомогою Asana, зберігаючи вміст Dropbox.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tools