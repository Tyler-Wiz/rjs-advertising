import styled from 'styled-components'

export const Container = styled.div` 
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

export const Header = styled.h2` 
     font-size: 4rem ;
     margin-bottom:2.5rem ;
`

export const Button = styled.button` 
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

export const Icon = styled.div` 
    font-size:2.5rem ;
`

export const Image = styled.img` 
     width:40%;
`

export const Para = styled.p`
     font-size: 1.5rem ;
     margin-bottom:.3rem ;
`