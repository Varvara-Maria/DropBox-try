import React from "react";
import { useState } from "react";
import Accordion from "./Accordion";
import './Accordion.css';

const questionsAnswers = [
  {
      key: '1',
    question: "Отримайте 2 ГБ місця у хмарному сховищі безкоштовно в обліковому записі Dropbox Basic",
    answer:
      "Зберігайте файли та отримуйте доступ до них з будь-якого пристрою та надавайте доступ до них будь-кому. Відкрийте для себе переваги Dropbox – отримайте безкоштовний обліковий запис без будь-яких умов!",
    img: 'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/basic/basic_hero_ui_ru@2x.png.transform/80q/img.png',
    color: '#14c8eb'
  },
  {
      key: '2',
    question: "У Dropbox Plus достатньо місця для всіх ваших файлів",
    answer:
      "Захистіть свої фотографії, особисті документи, робочі файли та багато іншого. Зберігайте всі ваші файли у свій обліковий запис з 2000 ГБ вільного місця та використовуйте зручні інструменти, які допоможуть вам організувати зберігання документів.",
    img: 'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/plus/plus_plank_02_ui_ru@2x.png.transform/80q/img.jpg',
    color: '#fa551e'
    },
  {
      key: '3',
    question: "У Dropbox Family місця для всіх файлів сім'ї вистачить з лишком",
    answer: `2000 ГБ місця зберігання даних, які можуть спільно використовувати до 6 человек. Кожен користувач тарифного плану Family отримує доступ до свого особистого облікового запису Dropbox — і все це за ціною, нижчою від вартості двох тарифних планів Plus.`,
    img: 'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/family/family_plank_03_ui_ru@2x.png.transform/80q/img.png',
    color: '#fad24b'
  },
  {
      key: '4',
    question: "Спростіть життя собі та своїм клієнтам за допомогою Dropbox Professional",
    answer: `Полный набор высококачественных инструментов для совместного использования + 3000 ГБ места. С аккаунтом Dropbox Professional работа с коллегами и клиентами станет намного проще.`,
    img: 'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/pro/pro_plank_02_ui_ru@2x.png.transform/80q/img.jpg',
    color: '#ffafa5'
},
  {
    key: '5',
    question: "З HelloSign робота з документами піде швидше",
    answer: `Заощаджуйте час і ні про що не хвилюйтеся з HelloSign. Підписуйте юридично значущі угоди кількома клацаннями миші. І так само легко просіть підпис в інших.`,
    img: 'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/pro/pro_plank_01_ui_ru@2x.png.transform/80q/img.png',
    color: '#ff8c19'
},
  {
    key: '6',
    question: "Заощаджуйте час і ні про що не хвилюйтеся з HelloSign. Підписуйте юридично значущі угоди кількома клацаннями миші. І так само легко просіть підпис в інших.",
    answer: `Забезпечте важливі та конфіденційні дані. Автоматизуйте трудомісткі процеси за допомогою потужних інструментів адміністрування та спільної роботи. Якщо щось трапиться, ви завжди можете без перешкод відновити ваші дані. Кількість користувачів цього тарифного плану має бути не менше трьох.`,
    img: 'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/business/CollabBrowse_2-ru@2x.png.transform/80q/img.png',
    color: '#b4dc19'
},
  {
    key: '7',
    question: "DocSend дозволяє відстежувати, аналізувати та оптимізувати вміст",
    answer: `Безпечно діліться найважливішими діловими документами та отримуйте інформацію про продуктивність у режимі реального часу. DocSend допомагає керувати найбільш важливими корпоративними файлами та оптимізувати їх зберігання.`,
    img: 'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/collaboration-diagram.svg',
    color: '#b4c8e1'
},
  {
    key: '8',
    question: "Завчасно виявляйте погрози вмісту вашої робочої групи за допомогою Dropbox Advanced",
    answer: `Постійний моніторинг безпеки та оповіщення. Журнал версій та відновлення файлів протягом року. І стільки місця для зберігання даних скільки вам потрібно. Dropbox Advanced – це безпечне рішення для спільної роботи усієї вашої команди. Кількість користувачів цього тарифного плану має бути не менше трьох.`,
    img: 'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/JTBD_UI_7-ru@2x.png.transform/80q/img.png',
    color: '#c8aff0'
},
];

const AccordionApp = () => {

    const [index, setIndex] = useState(0)
    
  return (
    <div className="accordion">
      <div className="component">
        <Accordion questionsAnswers={questionsAnswers} setIndex={setIndex}/>
        <div className="accordion-img" style={{backgroundColor: questionsAnswers[index].color}}>
            <img src={questionsAnswers[index].img}  alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default AccordionApp;