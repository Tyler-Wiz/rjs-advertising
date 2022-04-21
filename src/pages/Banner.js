import React from 'react'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'
import * as CgIcons from 'react-icons/cg'
import * as GrIcons from 'react-icons/gr'

const Container = styled.div` 
   padding:3rem;
`

const Wrapper = styled.div` 
    display:flex;
    justify-content:center;
`

const Left = styled.div` 
    margin-right:8rem;
`

const Right = styled.div` 

`

const Leaderboard = styled.div` 
    width:72.8rem ;
    height:9rem ;
    background-color:#7e8cf2; 
    margin:3rem auto;
    cursor: pointer;
    border-radius:10px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        color: white;
        font-size: 3.6rem;
        width: 50%;
        text-transform:uppercase;
    }

`

const Video = styled.div` 
    width:636px ;
    height:360px ;
    background-color:#d95652;
    cursor: pointer;
    position: relative;
`
const VideoPlayer = styled.div` 
     background-color: black;
     width: 100%;
     height: 15%;
     position: absolute;
     bottom:0;
     display: flex;
     align-items: center;
`

const PlayerIcon = styled.div` 
     color: white;
     font-size: 2.5rem;
     width: 10%;
     background-color: black;
     display: flex;
     justify-content: center;
`

const PlayerProgress = styled.div` 
      width: 90%;
      height: 100%;
      background-color: #454545;
      display: flex;
      justify-content: center;
      align-items: center;

      section{
          width: 80%;
          height: 20%;
          background-color: black;
          border-radius:10px;
      }

      div{
          width: 35%;
          height: 100%;
          background-color: grey;
          border-radius:10px;
      }
`

const Squareboard = styled.div` 
    width:336px ;
    height:280px ;
    background-color: #fae505;
    cursor: pointer;
    border-radius:10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

    div{
        font-size: 12rem;
        color: blue;
    }

    p{
       position: absolute;
       bottom: 0;
       font-size: 3rem;
       text-transform:uppercase;
       background-color: white;
       width: 100%;
       height: 25%;
       display: flex;
       justify-content: center;
       align-items: center;
       color:blue ;
    }
`

const Icon = styled.div` 
      position: absolute;
      top: 45%;
      left: 50%;
      font-size: 7rem;
      color: white;
      transform: translate(-40%, -40%);
`

const Ball = styled.p` 
          width: 2.1%;
          height: 23%;
          position: absolute;
          background-color: white;
          border-radius:50%;
          top: 38%;
          left: 40%;
`

const ContentWrapper =styled.div` 
   display: flex;
   justify-content: space-between;
`

const Content = styled.div` 
      margin-top:2rem;
      width: ${props => props.sidebar === 'yes' && '100%'};

     section{
         background-color: #e3e3e3;
         width: 100%;
         height: 16rem;
         margin-bottom:3rem;
     }

     div{
         background-color: #e3e3e3;
         width: 300px;
         height: 3rem;
         margin-bottom:2rem;  
         width: ${props => props.sidebar === 'yes' && '100%'};
     }
`
const Wide = styled.div` 
    width:33.6rem ;
    height:60rem ;
    background-color:#7e8cf2; 
    margin:3rem auto;
    cursor: pointer;
    border-radius:10px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SmallLeader = styled.div` 
    width:63.6rem ;
    height:19rem ;
    background-color:#7e8cf2; 
    margin:3rem auto;
    cursor: pointer;
    border-radius:10px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Banner = () => {
  return (
    <Container>
         <Leaderboard>
             <h1>
                 Banner Ad 728 x 90
             </h1>
         </Leaderboard>
         <Wrapper>
            <Left>
            <Video>
                 <Icon><CgIcons.CgPlayButtonO/></Icon>
                 <VideoPlayer>
                     <PlayerIcon>
                        <FaIcons.FaPause/>
                     </PlayerIcon>
                     <PlayerProgress>
                         <section>
                           <div></div>
                           <Ball></Ball>
                         </section>
                     </PlayerProgress>
                 </VideoPlayer>
            </Video>
            <ContentWrapper>
                <Content>
                <section></section>
                <div></div>
                <div></div>
                <div></div>
                </Content>
                <Content>
                <section></section>
                <div></div>
                <div></div>
                <div></div>
                </Content>
            </ContentWrapper>
            <SmallLeader>
                
            </SmallLeader>
            <ContentWrapper>
                <Content>
                <section></section>
                <div></div>
                <div></div>
                <div></div>
                </Content>
                <Content>
                <section></section>
                <div></div>
                <div></div>
                <div></div>
                </Content>
            </ContentWrapper>
            </Left>
            <Right>
                <Squareboard>
                    <div>
                      <FaIcons.FaCoffee/>
                    </div>
                    <div>
                      <GrIcons.GrTextAlignLeft/>
                    </div>
                    <p>300 x 250 Banner</p>
                </Squareboard>
                <Content sidebar='yes'>
                <section></section>
                <div></div>
                <div></div>
                <div></div>
                </Content>
            <Wide>
            </Wide>
            </Right>
            
         </Wrapper>
         
    </Container>
  )
}
