import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as CgIcons from 'react-icons/cg'
import { Container,Header, Para, Wrapper, 
         Info, Icon, SubHeader, LearnContainer, Arrow 
       } from '../styles/Services.styles'


export const Services = () => {
  return (
    <Container>
           <Header>Our Services</Header>
           <Para position='center'>Our team of digital strategist and markerting experts are ready to <br></br>recommend the best channel for your business</Para>
          <Wrapper>
            <Info>
                <Icon><FaIcons.FaExternalLinkAlt/></Icon>
                <SubHeader>Sponsored Post</SubHeader>
                <Para>Use sponsored post to get the right leads for your business</Para>
                <LearnContainer>
                    <Para>Learn More</Para>
                    <Arrow><FaIcons.FaLongArrowAltRight/></Arrow>
                 </LearnContainer>
            </Info>
            <Info position='middle'>
                <Icon><CgIcons.CgWebsite/></Icon>
                <SubHeader>Rich Media</SubHeader>
                <Para>Use media formats like audio, video to capture leads fo your product</Para>
                <LearnContainer>
                   <Para>Learn More</Para>
                   <Arrow><FaIcons.FaLongArrowAltRight/></Arrow>
                 </LearnContainer>
            </Info>
            <Info>
                <Icon><FaIcons.FaMoneyCheck/></Icon>
                <SubHeader>Direct Ads</SubHeader>
                <Para>Generate leads using text, images, and a URL to your website</Para>
                <LearnContainer>
                    <Para>Learn More</Para>
                    <Arrow><FaIcons.FaLongArrowAltRight/></Arrow>
                 </LearnContainer>
            </Info>
          </Wrapper>  
    </Container>
  )
}
