import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { Container,CoverCircle,Circle,
         Left,Text, Header, Button, 
         Info, Icon, Right, Image 
       } from '../styles/Hero.styles'

import { Clients } from "./Clients";   
import { Services } from "./Services";

export const Hero = () => {
  return (
      <>
      
    <Container>
        <CoverCircle></CoverCircle>
        <Circle position='main' ></Circle>
        <Circle position='inner' solid='yes'></Circle>
        <Circle position='outer' solid='yes'></Circle>
        <Left>
            <Text color="DB3909" spacing='one'>Curated Direct Marketing</Text>  
            <Header>Take Your Campaign to The next level with tooXclusive</Header>  
            <Text spacing='four'>Reach Nigerian youths on Google, Facebook, Twitter and Web on a Single Platform</Text>
            <Button bg="2091D1" color='FFFFFF'>Get Started</Button>
            <Button bg="F5F2F1" color='000000' >Samples</Button>
            <Info>
                <Icon>
                    <FaIcons.FaCheckCircle/>
                </Icon>
                <Text>Trusted by some of Nigeria's Biggest Companies</Text>
            </Info>
            <Info>
                <Icon>
                    <FaIcons.FaCheckCircle/>
                </Icon>
                <Text>Campaign Objectives Guaranteed</Text>
            </Info>
        </Left>
        <Right>
         <Image src="./Img/Human.png" alt=''/>
         <Image size='fixed' Xaxis='one'   Yaxis='one'  src="./Img/Meeting.png" alt=''/>
         <Image size='fixed' Xaxis='two'   Yaxis='two'  src="./Img/Music.png" alt=''/>
         <Image size='fixed' Xaxis='three' Yaxis='three'  src="./Img/Results.png" alt=''/>
        </Right>
    </Container>
    <Clients />
    <Services/>
    </>
  )
}
