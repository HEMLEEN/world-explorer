import { modelContentsDetails } from "../../../constants/Contents"
import Header from "../../../containers/Header"
import ModelContainer from "../../frontend/ModelContainer"

const Basics = () => {

  return (
    <>
    <Header headerText='Create a New React App' />
    <ModelContainer buttonName='Basics' modelContent={modelContentsDetails.basic}/>
    </>
    
  )
  
}

export default Basics