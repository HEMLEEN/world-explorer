import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../containers/Header'

const Frontend = () => {

  return (
    
    <>
      <Header headerText='STUDY MATERIAL' />
      <div className='AppContent'>
        <Link className='Link' to='/reactjs'>Reactjs Bascis</Link>
        <Link className='Link' to='/typescript'>ReactTypescript Bascis</Link>
        <Link className='Link' to='/nextjs'>Nextjs-Framework</Link>
        <Link className='Link' to='/javascript'>Javascript Bascis</Link>
        <Link className='Link' to='/core-concepts'>Core Concepts Bascis</Link>
        <Link className='Link' to='/backend'></Link>
        <Link className='Link' to='/backend'></Link>
        <Link className='Link' to='/backend'></Link>
        <Link className='Link' to='/backend'></Link>
      </div>
      <div className='App'>
      </div>
    </>
  )
}

export default Frontend