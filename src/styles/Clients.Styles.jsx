import styled from 'styled-components'

export const Container = styled.section`
    padding:2rem ;
    background-color:var(--Grey);
    display:flex ;
    justify-content: space-around;
    align-items:center ;
    position: relative;
`

export const Image = styled.img`
    width:13rem;
    padding:2rem ;
    filter: grayscale(100%);
    cursor: pointer;
    z-index:3 ;

    &:hover{
        filter:grayscale(0%)
    }
`
