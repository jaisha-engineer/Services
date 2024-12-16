import React from 'react'
import Services from "./components/Service/Services"
import Revenue from "./components/Revenu/Revenue"
import Medical from "./components/Credential/Medical"
import MedicalCoding from './components/Coding/Medical Coding'
import Denial from './components/Management/Denial'
import Biling from './components/Medical/Biling'
import Audit from './components/Auditing/Audit'

function App() {
  return (
    <div>
      <Services/>
      <Revenue/>
      <Medical/>
      <MedicalCoding/>
      <Denial/>
      <Biling/>
      <Audit/>
    </div>
  )
}

export default App