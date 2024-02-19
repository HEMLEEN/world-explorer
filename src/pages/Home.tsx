import React from 'react'
import { ImageSource } from '../constants/ImageSource'
import { Link } from 'react-router-dom'
import Header from '../containers/Header'

const Home = () => {


  return (
    <>

      <Header headerText='Road-Map-FullStack' />
      <div className='AppBodyColumn'>
        <div className='AppBodyRow'>
          <div className='App'>
            <h1>FronEnd - Developement</h1>
            <h1><Link className='Link' to='/frontend'>Read More...</Link></h1>
          </div>
          <div className='App'>
            <h1>Backend - Developement</h1>
            <h1><Link className='Link' to='/backend'>Read More...</Link></h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home