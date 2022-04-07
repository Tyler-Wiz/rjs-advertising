import React from 'react'
import styled from 'styled-components'
import { NavData } from '../data/Data'
import * as FiIcon from 'react-icons/fi'

const Container = styled.nav`
    width:100% ;
    padding: 2.5rem 7rem ;
    display:flex ;
    justify-content:space-between ;
    align-items:center;
    line-height:22.2px ;
    background-color:var(--Grey);
    position:relative ;
`

const Left = styled.div`
    flex:2;
    z-index:2 ;
    position:relative ;
`

const Right = styled.div`
    flex:2;
    padding-right:2rem;
    display:flex ;
    justify-content:center ;
    align-items:center;
    z-index:2 ;

    @media (max-width:750px) {
         display:none; 
    }
`

const Icon = styled.div`
    align-self:center ;
`

const List = styled.ul`
    list-style:none ;
    font-size:2rem ;
    display:flex ;
    align-items:center ;
`

const Link = styled.a`
    text-decoration:none;
    color:var(--RichBlack) ;
    margin-right:6rem;
`

const Image = styled.img`
    width:15.2rem;
    height:8.8rem ;

    @media (max-width:750px) {
        margin-top:1.6rem;
        width:9.2rem;
        height:6.8rem ; 
    }

`

export const DesktopNav = () => {
  return (
    <Container>
        <Left>
             <a href='/'><Image src='./Img/logo.png'/></a>
        </Left>
        <Right>
            <List>
                {NavData.map((item, i) => (
                    <li key={i}>
                        <Link href="">{item.name}</Link>
                    </li>
                ))}
            </List>
            <Icon>
                <FiIcon.FiPhoneCall size={25}/>
            </Icon>
        </Right> 
    </Container>
  )
}
