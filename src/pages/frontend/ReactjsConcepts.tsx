import { modelContentsDetails } from '../../constants/Contents';
import { InstallationGuide, WhatisReact } from '../../constants/TextFileConstants';
import ModelContainer from './ModelContainer';
import Header from '../../containers/Header'




const ReactjsConcepts = () => {

 
  return (
    <>
      <Header headerText='Reactjs' />
      <div className='AppContent'>
        <ModelContainer modelHeader='REACT' buttonName='What is React' modelContent={<WhatisReact />} />
        <ModelContainer modelHeader='Create React App' buttonName='Installation' modelContent={<InstallationGuide />} />
        <ModelContainer modelHeader='REACT' buttonName='Hooks' modelContent={modelContentsDetails.react.hooks} />
        <ModelContainer modelHeader='REACT' buttonName='useState' modelContent={modelContentsDetails.react.useState} modelExample={modelContentsDetails.react.useStateExample} />
        <ModelContainer buttonName='useEffect' modelContent={modelContentsDetails.react.useEffect} modelExample={modelContentsDetails.react.useEffectExample} />
        <ModelContainer buttonName='Functions' />
      </div>
    </>
  )

}

export default ReactjsConcepts