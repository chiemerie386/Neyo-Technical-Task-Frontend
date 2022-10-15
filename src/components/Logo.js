import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logoWhite from '../assets/logo_black.svg'

const LogoText = styled.h1`

transition: all 0.2s ease;

&:hover{
    transform: scale(1.2);
} 
`

const Logo = () => {
  return (
    <LogoText>
     <Link to="/">
    <img width={150} height={90} src={logoWhite}/>
         </Link>
    </LogoText>
 
  )
}

export default Logo