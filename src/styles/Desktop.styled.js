import styled from 'styled-components'

export const Container = styled.nav`
    width:100% ;
    padding: 2.5rem 7rem ;
    display:flex ;
    justify-content:space-between ;
    align-items:center;
    line-height:22.2px ;
    background-color:var(--Grey);
    position:relative ;

    @media (max-width:750px) {
        padding: 2.5rem 3rem ;
    }
`

export const Left = styled.div`
    flex:2;
    z-index:2 ;
    position:relative ;
`

export const Right = styled.div`
    flex:2;
    padding-right:2rem;
    display:flex ;
    justify-content:center ;
    align-items:center;
    z-index:2 ;

    @media (max-width:750px) {
         display:none; 
    }
`

export const Icon = styled.div`
    align-self:center ;
`

export const List = styled.ul`
    list-style:none ;
    font-size:2rem ;
    display:flex ;
    align-items:center ;
`

export const Link = styled.a`
    text-decoration:none;
    color:var(--RichBlack) ;
    margin-right:6rem;
`

export const Image = styled.img`
    width:15.2rem;
    height:8.8rem ;

    @media (max-width:750px) {
        margin-top:1.6rem;
        width:7rem;
        height:5rem ; 
    }

`