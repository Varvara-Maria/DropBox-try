import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import './Accordion.css';

const Accordion = ({ questionsAnswers, setIndex }) => {
  const [activeIndex, setActiveIndex] = useState(1);


  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setIndex(index);
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <div className="faq">
      <dl className="faq__list">{renderedQuestionsAnswers}</dl>
    </div>
  );
};

export default Accordion;
