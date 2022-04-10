import React from 'react'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'



const Container = styled.section`
    width:70% ;
    margin: 4rem auto;
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    height:40vh ;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    position:relative ;

    @media (max-width:750px) {
        width:80% ;
        height:70vh ;
        flex-direction:column-reverse ;
    }
`

const Float = styled.div` 
    background-color:#1C8DCF;
    width:13%;
    height:100% ;
    position:absolute ;
    bottom:0;
    right: 0;
    z-index:-9999 ;

    @media (max-width:750px) {
        display:none;
    }
`

const Right = styled.div` 
    background-color:#10192B;
    width:35%;
    padding:5rem ;
    color:var(--Grey);

    @media (max-width:750px) {
        width:100%;
    }
`

const Left = styled.div` 
    width:65% ;
    padding:6rem ;
    text-align:center ;

    textarea, input{
     outline: none;
     }

    input, textarea{
        width:100% ;
        display:flex ;
        align-items: center;
        justify-content:center ;
        border:none ;
        margin:2rem 0;
        padding:1rem;
        border-bottom:.2rem solid grey;
        text-transform:capitalize;
        font-family: 'Crimson Pro', serif;
    }

    button{
        width:60% ;
        margin:0 auto ;
        padding:1rem 10rem ;
        background-color:#10192B;
        color:var(--Grey);
        border:none ;
        text-transform:uppercase;
    }

    @media (max-width:750px) {
        width:80%;
    }
`

const Info = styled.div` 
    margin-bottom:2rem;
    display:flex;
    align-items:center ;
`
const Icon = styled.div` 
   font-size:3rem ;
   color:var(--Grey);
   margin-right:2rem;
`

const Header = styled.h3` 
   font-size:4rem ; 
   margin-bottom:3rem ;
`

const Para = styled.div`
     font-size:1.6rem ;
     margin-bottom:3rem ;
`
const Wrapper = styled.div`
    width:100% ;
    margin-left:8rem;
    display:flex;
    justify-content:center ;
    position:absolute ;
    bottom:0;
    right: 0;
    z-index:-9999 ;

    a{
        text-decoration:none;
        cursor: pointer;
    }

    @media (max-width:750px) {
        width:100% ;
        margin-bottom:4rem;
    }
`

const Socialicon = styled.div` 
     font-size:2rem ;
     margin-right:1rem;
     color:#10192B ;
     
`

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

        <form >                   
            <input type="text" id="name" placeholder="name"/>
            <input type="email" id="name" placeholder="email" />
            <textarea name="message" id="message" cols="30" rows="4"   placeholder="message"></textarea>
            <button>Send</button>
        </form>

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
