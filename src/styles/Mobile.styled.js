import styled from "styled-components";

export const Container = styled.nav`
background-color:white;
position:fixed ;
z-index:4 ;
top:${({openMenu}) => openMenu ? '0px' : '-500px'};;
right:0 ;
padding:4rem ;
width:70% ;
list-style:none ;
transition: ${({openMenu}) => openMenu ? '.5s ease-in-out' : '1s ease-in-out'};


a { 
   display:flex;
   align-items:center ;
   text-decoration:none;
   padding:1.5rem ;
   z-index:99999 ;
}

@media (min-width:750px) {
     display:none;
}
`

export const Icon = styled.div`
font-size:2rem;
color:var(--RichBlack) ;
margin-right:2rem;
`

export const Name = styled.p`
font-size:2rem;
color:var(--RichBlack) ;
`

export const Hamburger = styled.div`
font-size:3.5rem;
position:absolute;
right:0;
top: 3rem;
z-index:5 ;
padding:2rem;
cursor:pointer ;

@media (min-width:750px) {
     display:none;
}
`