import React from 'react';
import { useState, useEffect } from 'react';
import './Slider.css';

const sliderinfo = [
  {
    id: '1',
    text: "«Dropbox дуже корисний для соціальних мереж. Я можу зайти в свій обліковий запис у будь-який час і вибрати будь-яку фотографію, щоб надихнутися і створити публікацію».",
    answer:
      "Прочитати історію повністю",
    img: 'https://aem.dropbox.com/cms/content/dam/dropbox/dmep/assets/articles/DigitalNomads2_1440x960.jpg.transform/1024w/80q/img.jpg',
    author: 'Мері Ешлі Крог (MAK), ілюстратор та графічний дизайнер',
    color: '#9b0032'
  },
  {
    id: '2',
    text: "«Завдяки Dropbox ми зміцнили спільну дистанційну роботу нашої команди, а також підвищили гнучкість та повністю змінили підхід до офісної культури».",
    answer:
      "Прочитати історію повністю",
    img: 'https://aem.dropbox.com/cms/content/dam/dropbox/dmep/assets/customer-success-stories/sundance/sundance_editor.png.transform/1024w/80q/img.jpg',
    author: 'Адам Монтгомері, провідний упорядник програми, кінофестиваль Санденс',
    color: '#fa551e'
    },
  {
    id: '3',
    text: "«Ми – звичайна некомерційна організація. Інструмент, який широко використовується у сфері дизайну, допомагає нам підвищити професійний рівень».",
    answer:
      "Прочитати історію повністю",
    img: 'https://aem.dropbox.com/cms/content/dam/dropbox/dmep/assets/customer-success-stories/creativity-explored/1-ce-c03-hero@2x.jpg.transform/1024w/80q/img.jpg',
    author: 'Енн Каппес, арт-директор Creativity Explored',
    color: '#007891'
  },
  {
    id: '4',
    text: "Dropbox дозволяє мені легко пояснити свої ідеї колегам",
    answer:
      "Прочитати історію повністю",
    img: 'https://aem.dropbox.com/cms/content/dam/dropbox/dmep/assets/customer-success-stories/semi-permanent/semipermanent1_hero_b.png.transform/1024w/80q/img.jpg',
    author: 'Мюррей Белл, засновник та виконавчий креативний директор Semi Permanent',
    color: '#b4dc19'
},
  {
    id: '5',
    text: "«Наша команда працює віддалено – все у різних часових поясах. Dropbox – це відмінне місце для дистанційної спільної роботи та зручного обміну файлами».",
    answer:
      "Прочитати історію повністю",
    img: 'https://aem.dropbox.com/cms/content/dam/dropbox/experience/en-us/drop-in-video-series/SOPHIA_Still005.png.transform/1024w/80q/img.jpg',
    author: 'Софія Чанг, ілюстратор та дизайнер',
    color: '#78286e'
},
  {
    id: '6',
    text: "«Велика перевага Dropbox – можливість керування версіями. Цілком імовірно, що ви захочете повернутися до більш ранньої версії у разі виникнення нової цікавої концепції».",
    answer:
      "Прочитати історію повністю",
    img: 'https://aem.dropbox.com/cms/content/dam/dropbox/experience/en-us/drop-in-video-series/KingChildren_1920x1280.png.transform/1024w/80q/img.jpg',
    author: 'Сахір Завері, генеральний директор King Children',
    color: '#ffafa5'
},
  {
    id: '7',
    text: "Творче зростання відбувається тоді, коли вам не потрібно турбуватися про управління сховищем",
    answer:
      "Прочитати історію повністю",
    img: 'https://aem.dropbox.com/cms/content/dam/dropbox/dmep/assets/customer-success-stories/hope-gallery/hope_quote.png.transform/1024w/80q/img.jpg',
    author: 'Енді Скал, засновник та креативний директор HOPE Organization',
    color: '#fad24b'
},
];



function SliderApp() {

  const [slideIndex, setSlideIndex] = useState(1);
  useEffect(() => {
    console.log(slideIndex);
  }, [slideIndex]);
  
  const nextSlide = () => {
    if(slideIndex == sliderinfo.length) {
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }

  const prevSlide = () => {
    if(slideIndex == 1) {
    }
    else {
      setSlideIndex(slideIndex - 1)
    }
  }

  const renderSlider = sliderinfo.map((item, index) => {

    return (
      index == (slideIndex -1) && 
      <div className="slider-block">
        <div className='slider'>
        {
          slideIndex == 1? <div style={{display: 'none', cursor: 'default'}} class="sliders__prev">
            <i style={{color: 'transparent'}} class="fas fa-angle-left"></i>
          </div> :          
          <div onClick={prevSlide} className="sliders__prev">
            <i class="fas fa-angle-left"></i>
          </div>
        }
          
    
          <img src={sliderinfo[index].img} alt="" />
          <div className='slider__info' style={{backgroundColor: sliderinfo[index].color}}>
            <p className="slider__tittle">{sliderinfo[index].text}</p>
            <a 
              href="./https://experience.dropbox.com/ru-ru/resources/bound-for-nowhere-customer-story" 
              className="slider__link"
            >
              {sliderinfo[index].answer}
            </a>
            <p className="slider__author">{sliderinfo[index].author}</p>
          </div>

          {
          slideIndex == 7? <div style={{display: 'none', cursor: 'default'}} class="sliders__prev">
            <i style={{color: 'transparent'}} class="fas fa-angle-right"></i>
          </div> :          
          <div onClick={nextSlide} className="sliders__next">
            <i class="fas fa-angle-right"></i>
          </div>
          }

        </div>  

        <div className="slider__counter">
          {
            slideIndex == 1? <div style={{opacity: 0, cursor: 'default'}} class="offer__slider-prev">
            <i style={{color: 'transparent'}} class="fas fa-angle-left"></i>
          </div> :           
            <div onClick={prevSlide} class="offer__slider-prev">
            <i class="fas fa-angle-left"></i>
          </div>
          }

          <div className='slider__number'>          
            <span id="current">0{slideIndex}/</span>
            <span id="total">0{sliderinfo.length}</span>
          </div>
           {
              slideIndex == 7? <div style={{opacity: 0, cursor: 'default'}} class="offer__slider-next">
              <i style={{color: 'transparent'}} class="fas fa-angle-left"></i>
            </div> :          
             <div  onClick={nextSlide} class="offer__slider-next">
             <i class="fas fa-angle-right"></i>
           </div>
           }

        </div>
      </div>
    );
  });


  return (
    <div>
      {renderSlider}
    </div>
  )
}

export default SliderApp