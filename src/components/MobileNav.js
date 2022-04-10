import React from 'react'
import { NavData } from '../data/Data';
import * as GiIcons from 'react-icons/gi'
import * as GrIcons from 'react-icons/gr'
import { Toggle } from '../utilities/Toggle';
import { Container, Hamburger, Icon, Name } from '../styles/Mobile.styled';


export const MobileNav = () => {

const [IsOpen, openElement] = Toggle()


  return (
    <>
        <Hamburger onClick={openElement}>
                {IsOpen ?  <GrIcons.GrClose/> : <GiIcons.GiHamburgerMenu/> }
        </Hamburger>
        <Container openMenu={IsOpen}> 
                {NavData.map((item, id) => (
                        <li key={id}>
                            <a href='/'>
                                <Icon>{item.icon}</Icon>
                                <Name>{item.name}</Name>
                            </a>
                        </li>
                    ))}    
        </Container>
    </>
  )
}
