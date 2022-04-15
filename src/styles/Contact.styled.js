import styled from "styled-components"

export const Container = styled.section`
width:70% ;
margin: 2rem auto;
padding:2rem ;
display:flex ;
justify-content:center ;
align-items:center ;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
position:relative ;

@media (max-width:750px) {
    width:90% ;
    flex-direction:column-reverse ;
}
`

export const Float = styled.div` 
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

export const Right = styled.div` 
background-color:#10192B;
width:40%;
padding:5rem ;
color:var(--Grey);

@media (max-width:750px) {
    width:100%;
}

`

export const Left = styled.div` 
width:55% ;
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
    display:flex ;
    justify-content:center ;
    align-items:center;
}

@media (max-width:750px) {
    width:100%;
    padding: 3rem 1.5rem;
}
`

export const Info = styled.div` 
margin-bottom:2rem;
display:flex;
align-items:center ;
`
export const Icon = styled.div` 
font-size:3rem ;
color:var(--Grey);
margin-right:2rem;
`

export const Header = styled.h3` 
font-size:4rem ; 
margin-bottom:3rem ;
`

export const Para = styled.div`
 font-size:1.6rem ;
 margin-bottom:3rem ;
`
export const Wrapper = styled.div`
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

export const Socialicon = styled.div` 
 font-size:2rem ;
 margin-right:1rem;
 color:#10192B ;
 
`

