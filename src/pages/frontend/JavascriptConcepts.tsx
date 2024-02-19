import React from 'react'
import Header from '../../containers/Header'
import { Button, Icon, Modal, ModalActions, ModalContent } from 'semantic-ui-react'
import ModelContainer from './ModelContainer'
import { modelContentsDetails } from '../../constants/Contents'

const JavascriptConcepts = () => {

  const [open, setOpen] = React.useState(false)
  
  return (
    
    <>
      <Header headerText='Javascript'/>

     <div className='container'>
     <ModelContainer buttonName='Basics' modelContent={modelContentsDetails.basic}/>
      <ModelContainer buttonName='Variables' modelContent={modelContentsDetails.syntax.Variables}/>
      <ModelContainer buttonName='DataTypes' modelContent={modelContentsDetails.syntax.DataTypes}/>
      <ModelContainer buttonName='Operators' modelContent={modelContentsDetails.syntax.DataTypes}/>
      <ModelContainer buttonName='Arithmetic'/>
      <ModelContainer buttonName='Assignment'/>
      <ModelContainer buttonName='Data Types'/>
     </div>
    </>
  )

}

export default JavascriptConcepts