import React from 'react'
import { NavData } from '../data/Data'
import * as FiIcon from 'react-icons/fi'
import { Container,Image, Left, Right, List, Icon, Link } from '../styles/Desktop.styled'


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
                        <Link href={item.path}>{item.name}</Link>
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
