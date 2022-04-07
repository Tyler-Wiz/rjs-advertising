import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { Container, Wrapper, Image, 
         Para, Header, Icon, Social 
       } from '../styles/Footer.styles'

export const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Image src='./Img/logo.png' alt='' />
            <Para>Nigeria's Digital Music and <br></br>Entertainment Giant</Para>
        </Wrapper>
        <Wrapper>
            <Header>Quick Links</Header>
            <Para>About Us</Para>
            <Para>Services</Para>
            <Para>Contact Us</Para>
            <Para>Case Studies</Para>
        </Wrapper>
        <Wrapper>
            <Header>Useful Links</Header>
            <Para>Privacy Policy</Para>
            <Para>our team</Para>
            <Para>disclamer</Para>
            <Para>tooxclusive.com</Para>
        </Wrapper>
        <Wrapper>
            <Header>Be Social</Header>
            <a href='https://www.instagram.com/tooxclusive_com/' target='_blank' rel="noreferrer"><Social>
                <Icon><FaIcons.FaInstagram/></Icon>
                <Para>Instagram</Para>
            </Social></a>
            <a href='https://web.facebook.com/tooxclusive' target='_blank' rel="noreferrer"><Social>
                <Icon><FaIcons.FaFacebookSquare/></Icon>
                <Para>Facebook</Para>
            </Social></a>
            <Social>
                <Icon><FaIcons.FaTwitterSquare/></Icon>
                <Para>Twitter</Para>
            </Social>
            <a href='https://www.linkedin.com/company/tooxclusive-digital-llc?' target='_blank' rel="noreferrer"><Social>
                <Icon><FaIcons.FaLinkedin/></Icon>
                <Para>LinkedIn</Para>
            </Social></a>
        </Wrapper>
    </Container>
  )
}
