import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'
import { Form } from '../components/Form'
import { Container, Float, Wrapper, 
    Socialicon, Left, Header, 
    Para, Right, Info, Icon, 
       } from '../styles/Contact.styled'

export const Contact = () => {
  return (
      <>
      <Container>
      <Float>
        <Wrapper>
            <a href='https://www.instagram.com/tooxclusive_com/' target='_blank' rel="noreferrer">
                <Socialicon><FaIcons.FaInstagram/></Socialicon>
           </a>
            <a href='https://web.facebook.com/tooxclusive' target='_blank' rel="noreferrer">
                <Socialicon><FaIcons.FaFacebookSquare/></Socialicon>
            </a>
            <a href='https://www.linkedin.com/company/tooxclusive-digital-llc?' target='_blank' rel="noreferrer">
                <Socialicon><FaIcons.FaLinkedin/></Socialicon>
            </a>
        </Wrapper>
      </Float>
      <Left>
        <Header>Contact Us</Header>
        <Para>Feel free to contact us any time. we will get back to you as soon as we can.</Para>
        <Form/>
      </Left>
      <Right>
         <Info>
           <Icon>
               <FaIcons.FaEnvelope/>
           </Icon>
           <Para>ads@tooxclusive.com</Para>
         </Info>
         <Info>
           <Icon>
               <FaIcons.FaPhoneVolume/>
           </Icon>
           <Para>+234 ( 806 ) 214 7651</Para>
         </Info>
         <Info>
           <Icon>
               <SiIcons.SiTimescale/>
           </Icon>
           <Para>9:00am - 6:00pm</Para>
         </Info>
         <Info>
           <Icon>
               <FaIcons.FaBuilding/>
           </Icon>
           <Para>427 Oluwadamilola Fashade Street, Omole Phase 1, Lagos, Nigeria</Para>
         </Info>
      </Right>
    </Container>
      </>
    
  )
}
