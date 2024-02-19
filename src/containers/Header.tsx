import React, { useState } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const Header = (props: any) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (

        <>

            <div className='Header'>
            </div>
            <div className='HeaderText'>
                <h1> {props.headerText}</h1>
                </div>

        </>
    )
}

export default Header