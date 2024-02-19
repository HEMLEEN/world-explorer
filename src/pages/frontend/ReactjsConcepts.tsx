import Header from '../../containers/Header'
import ModelContainer from './ModelContainer';
import { modelContentsDetails } from '../../constants/Contents';

const ReactjsConcepts = () => {



 
  return (

    <>

      <Header headerText='Reactjs' />

      <div className='container'>
     <ModelContainer buttonName='Basics' modelContent={modelContentsDetails.basic}/>
      <ModelContainer buttonName='Hooks' modelContent={modelContentsDetails.react.hooks}/>
    <ModelContainer buttonName='useState' modelContent={modelContentsDetails.react.useState} modelExample={modelContentsDetails.react.useStateExample}/>
      <ModelContainer buttonName='useEffect' modelContent={modelContentsDetails.react.useEffect}  modelExample={modelContentsDetails.react.useEffectExample}/>
      {/* <ModelContainer buttonName='Functions'/> */}
  
     </div>
    </>
  )

}

export default ReactjsConcepts