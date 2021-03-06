import styled from 'styled-components'

export const Container = styled.section`
    padding:7rem 10rem;
    display:flex ;
    justify-content:center;
    align-items:center ;
    background-color:var(--RichBlack) ;
    color:white ;

    @media (max-width:750px) {
        flex-direction:column-reverse;
        padding:3rem 1rem;
    }
`

export const Wrapper = styled.div`
    width:25% ;
    padding:3rem ;

    a{
        text-decoration:none;
    }

    @media (max-width:750px) {
        width:100%;
        padding:1rem 3rem ;
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