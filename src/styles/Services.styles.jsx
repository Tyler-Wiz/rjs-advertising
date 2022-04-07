import styled from 'styled-components'

export const Container = styled.section`
    padding:4rem ;
    display:flex ;
    flex-direction:column ;
    justify-content:center ;
    align-items:center ;
    margin-bottom:7rem;
`

export const Wrapper = styled.div`
    display:flex ;
    justify-content:center ;
    align-items:center ;
`

export const Info = styled.div`
     width: 33rem ;
     height:30rem ;
     padding:3.5rem ;
     margin:3rem ;
     border-radius: 1.6rem;
     box-shadow: rgba(16, 25, 43, 0.3) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
     background-color:rgba(28, 141, 207, 0.2) ;
     background-color: ${props => props.position === 'middle' && '#db3a097f' };
`

export const Header = styled.h2`
    font-size:4.5rem;
    font-weight:600 ;
    margin-bottom:1rem ;
`

export const SubHeader = styled.h3`
    font-size:2.5rem;
    font-weight:600 ;
    margin-bottom:2rem ;
`

export const Para = styled.p`
    font-size:1.8rem;
    font-weight:500 ;
    margin:0 ;
    text-align:${props => props.position === 'center' && 'center'};
`

export const Icon = styled.div`
    font-size:3rem ;
    margin-bottom:1.5rem ;
`

export const LearnContainer = styled.div`
    width:45% ;
    display:flex ;
    justify-content:space-between ;
    align-items: center;
    margin-top: 3rem ;
`

export const Arrow = styled.div`
    font-size: 2rem;
    align-self:center;
    margin-top: .8rem ;
`