import styled from 'styled-components'

export const Container = styled.section`
    padding:7rem 10rem;
    display:flex ;
    justify-content:center;
    align-items:center ;
    background-color:var(--RichBlack) ;
    color:white ;
`

export const Wrapper = styled.div`
    width:25% ;
    margin-left:8rem;

    a{
        text-decoration:none;
    }
`

export const Header = styled.h4`
    font-size: 2.4rem;
    margin-bottom:2.5rem;
`

export const Para = styled.p`
    font-size: 1.7rem;
    margin-bottom:1.5rem;
    text-transform:capitalize;
`

export const Image = styled.img`
    width: 60% ;
    filter:grayscale(80%) ;
    
`

export const Social = styled.div`
    display:flex;
    color:white ;

`

export const Icon = styled.div`
    font-size:2rem ;
    margin-right:1rem ;
`