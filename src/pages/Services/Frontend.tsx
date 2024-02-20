import { Link } from 'react-router-dom'

import Header from '../../containers/Header'

const Frontend = () => {

  return (
    <>
      <Header headerText='STUDY MATERIAL' />
      <div className='AppContent'>
        <Link className='Link' to='/reactjs'><h4>Reactjs Bascis</h4></Link>
        <Link className='Link' to='/typescript'><h4>ReactTypescript Bascis</h4></Link>
        <Link className='Link' to='/nextjs'><h4>Nextjs-Framework</h4></Link>
        <Link className='Link' to='/javascript'><h4>Javascript Bascis</h4></Link>
        <Link className='Link' to='/core-concepts'><h4>Core Concepts Bascis</h4></Link>
        <Link className='Link' to='/backend'></Link>
        <Link className='Link' to='/backend'></Link>
        <Link className='Link' to='/backend'></Link>
        <Link className='Link' to='/backend'></Link>
      </div>  
    </>
  )

}

export default Frontend