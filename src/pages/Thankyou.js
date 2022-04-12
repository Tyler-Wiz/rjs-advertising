import React from 'react'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'

const Container = styled.div` 
     display:flex ;
     flex-direction:column ;
     justify-content:center;
     align-items: center;
     padding:5rem ;
     color:rgba(0,0,0,0.5) ;

     div{
         display:flex ;
         margin:2rem;
     } 
`

const Header = styled.h2` 
     font-size: 4rem ;
     margin-bottom:2.5rem ;
`

const Button = styled.button` 
    text-transform:capitalize;
    padding:1rem 3rem ;
    margin:2rem 3rem;
    font-weight:600;
    border:2px solid var(--PrimaryColor) ;
    border-radius:20px;
    color:var(--PrimaryColor) ;
    background-color:none;
    cursor: pointer;
`

const Icon = styled.div` 
    font-size:2.5rem ;
`

const Image = styled.img` 
     width:40%;
`

const Para = styled.p`
     font-size: 1.5rem ;
     margin-bottom:.3rem ;
`

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

      <div>
        <Icon><FaIcons.FaInstagram/></Icon>
        <Icon><FaIcons.FaFacebookSquare/></Icon>
        <Icon><FaIcons.FaTwitterSquare/></Icon>
        <Icon><FaIcons.FaLinkedin/></Icon>
      </div>

    </Container>
  )
}
