
import { Link } from 'react-router-dom'
import Header from '../containers/Header'

const Home = () => {


  return (
    <>
  <Header headerText = 'Road-Map-FullStack'/>
   
      <div className='AppContent'>
      <Link className='Link' to='/frontend'><h2>Frontend Development</h2></Link>
      <Link className='Link' to='/backend'><h2>Backend Development</h2></Link>      
    </div>

    </>
  )
}

export default Home