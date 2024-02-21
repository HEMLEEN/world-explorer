import { Link } from "react-router-dom"
import Header from "../../containers/Header"

const Backend = () => {

  return (
   <>
    <Header headerText='STUDY MATERIAL' />
      <div className='AppContent'>
        <Link className='Link' to='/nodejs'><h4>Node JS</h4></Link>
        <Link className='Link' to='/nestjs'><h4>NEST JS</h4></Link>
        <Link className='Link' to='/typescript'><h4>Node Typescript</h4></Link>
      </div> 
   </>
  )
  
}

export default Backend