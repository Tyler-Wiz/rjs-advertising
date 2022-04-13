import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { Container, Image, Header, Para, Button, Icon } from '../styles/Thank.styled'


export const Thankyou = () => {
  
  return (
    <Container>
        <Image src='./Img/mail.jpg' />
       <Header>
           Thank you for contacting Us!
       </Header>
       <Para>We have received your message.</Para>
       <Para>We'll reach out to you shortly!</Para>
      <div>
          <a href='/' target='_blank'><Button>Back to Homepage</Button></a>
          <a href='https://tooxclusive.com/' target='_blank' rel="noreferrer"><Button>Visit Our Blog</Button></a>
      </div>
      <Para>Lets Connect!</Para>
      <section>
        <Icon><FaIcons.FaInstagram/></Icon>
        <Icon><FaIcons.FaFacebookSquare/></Icon>
        <Icon><FaIcons.FaTwitterSquare/></Icon>
        <Icon><FaIcons.FaLinkedin/></Icon>
      </section>
    </Container>
  )
}
