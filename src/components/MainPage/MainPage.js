import React from 'react'
import AccordionApp from './components/Accordion/AccordionApp'

import DropBoxHelp from './components/DropBoxHelp'
import ForWhat from './components/ForWhat'
import MainScreen from './components/MainScreen'
import MoreInfo from './components/MoreInfo'
import MoreOpportunity from './components/MoreOpportunity'
import Tools from './components/Tools'

function MainPage() {
  return (
    <div>
      <MainScreen />
      <MoreOpportunity />
      <MoreInfo />
      <DropBoxHelp />
      <AccordionApp />
      <ForWhat />
      <Tools />
    </div>
  )
}

export default MainPage