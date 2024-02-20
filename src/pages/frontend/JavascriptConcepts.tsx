import {  Basics,DataTypes,Variables } from '../../constants/TextFileConstants'
import { DBERROR } from '../../enums/DbError'
import ModelContainer from './ModelContainer'
import Header from '../../containers/Header'

const JavascriptConcepts = () => {

  return (
    <>
      <Header headerText='Reactjs' />
      <div className='AppContent'>
       <ModelContainer buttonName='Basics' modelContent={<Basics/>}/>
      <ModelContainer buttonName='Variables' mo modelContent={<Variables/>} modelHeader={'Variables: Declared using var, let, or const'}/>
      <ModelContainer buttonName='DataTypes' modelContent={<DataTypes/>}/>
      <ModelContainer buttonName='Operators' modelContent={DBERROR.comments}/>
      <ModelContainer buttonName='Arithmetic' modelContent={DBERROR.comments}/>
      <ModelContainer buttonName='Assignment' modelContent={DBERROR.comments}/>
     </div>
    </>
  )

}

export default JavascriptConcepts