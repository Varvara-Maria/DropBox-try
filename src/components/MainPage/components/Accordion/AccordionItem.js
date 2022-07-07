import React from "react";
import './Accordion.css'
import { Link, NavLink } from 'react-router-dom';

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) => (
    <div>
        <div className='faq__question' key={item.question}>
            <dt>
            <button
                aria-expanded={ariaExpanded}
                aria-controls={`faq${index + 1}_desc`}
                data-qa="faq__question-button"
                className={`faq__question-button ${fontWeightBold}`}
                onClick={onClick}
            >
                {item.question}
                <i class="fas fa-angle-down"></i>
            </button>
            </dt>
            <dd>
            <p
                id={`faq${index + 1}_desc`}
                data-qa="faq__desc"
                className={`faq__desc ${showDescription}`}
            >
                {item.answer}<br /><br/>
                <NavLink to="/"><p className='learn-more' > Дізнатися більше </p></NavLink>
            </p>
            </dd>
        </div>

  </div>
);

export default AccordionItem;