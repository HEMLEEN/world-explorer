
import { Link } from 'react-router-dom'
import Header from '../containers/Header'

const Home = () => {


  return (
    <>
<div className='AppHead'>
      <h1>Road-Map-FullStack</h1>
      </div>
      <div className='App'>
        
           <Link className='Link' to='/frontend'><h2>Frontend Development</h2></Link>
           <Link className='Link' to='/frontend'><h2>Backend Development</h2></Link>

          </div>
    </>
  )
}

export default Home