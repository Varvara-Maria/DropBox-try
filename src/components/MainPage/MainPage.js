import React from 'react'
import AccordionApp from './components/Accordion/AccordionApp'

import DropBoxHelp from './components/DropBoxHelp'
import MainScreen from './components/MainScreen'
import MoreInfo from './components/MoreInfo'
import MoreOpportunity from './components/MoreOpportunity'

function MainPage() {
  return (
    <div>
      <MainScreen />
      <MoreOpportunity />
      <MoreInfo />
      <DropBoxHelp />
      <AccordionApp />
    </div>
  )
}

export default MainPage