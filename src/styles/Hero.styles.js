import styled, {keyframes} from 'styled-components'

export const Container = styled.div`
    display:flex ;
    justify-content:space-between ;
    padding: 0 7rem 11rem;
    background-color:var(--Grey);
    position:relative ;

    @media (max-width:750px) {
        flex-direction:column;
        
    }
`
export  const Circle = styled.div`
    width:clamp(120rem, 5vw, 125rem) ;
    height:clamp(101rem, 5vw, 105rem);
    background-color:white;
    border-radius:50%;
    position:absolute ;
    z-index: 1 ;
    top: -48rem ;
    left: -30rem ;
    border:${({solid}) => 'yes' ? '1px solid #00000029' : ''}  ;
    width: ${props => props.position === 'inner' && '121rem'};
    height:${props => props.position === 'inner' && '102rem'};

    @media (max-width:750px) {
         display:none; 
    }
`
export const CoverCircle = styled.div`
    width:clamp(122rem, 5vw, 125rem);
    height:clamp(106rem, 5vw, 110rem);
    background-color:white;
    border-radius:50%;
    position:absolute ;
    z-index: 1 ;
    top: -51rem ;
    left: -30rem ;

    @media (max-width:750px) {
         display:none; 
    }
`

export const Animation = keyframes`
     0% {
    -webkit-transform: translateX(200px);
            transform: translateX(200px);
    opacity: 0;
  }
    100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`
export const Right = styled.div`
    width:50%;
    z-index:1 ;
    position: relative;
    animation:${Animation} 2s ease-in-out ;

    @media (max-width:750px) {
        width:100% ;
    }
`

export const Left = styled.div`
    width:50% ;
    z-index:1 ;

    @media (max-width:750px) {
        width:100% ;
    }
`

export const Button = styled.button`
     padding: 1.5rem 4.5rem ;
     margin-right:4rem;
     background-color: #${props => props.bg};
     color:#${props => props.color};
     border:2px solid var(--PrimaryPicker);
     border-radius: 14px;
     font-size:2rem ;
     font-weight:600;
     cursor: pointer;
     margin-bottom:5rem;

     &:hover{
         color:black ;
         transform:scale(.9) ;
     }

     @media (max-width:750px) {
        padding: 1rem 2rem ;
        font-size:1.5rem ;
        margin-right:2rem;
    }
`

export const Header = styled.h2`
    font-size:clamp(3.5rem, 3.5vw, 5rem);
    margin-bottom:3rem;
    text-transform:capitalize ;
`


export const Text = styled.p`
    font-size:clamp(1.5rem, 1.5vw, 2rem);;
    margin-bottom:${props => props.spacing === 'four' && '2rem'};
    margin-bottom:${props => props.spacing === 'one' && '1rem'};
    color:#${props => props.color};
`

export const Icon = styled.div`
    font-size:3rem;
    color: var(--PrimaryPicker);
    margin-right:2rem;
`

export const Info = styled.div`
      margin-bottom:2rem;
      display:flex ;
      align-items:center ;
`

export const Image = styled.img`
    width:57%;
    position:absolute ;
    top:-7rem;
    left:10rem ;
    width:${props => props.size === 'fixed' && '30%'} ;
    top:${props => props.Xaxis === 'one' && '38rem'} ;
    top:${props => props.Xaxis === 'two' && '23rem'} ;
    top:${props => props.Xaxis === 'three' && '24rem'} ;
    left:${props => props.Yaxis === 'one' && '-13rem'} ;
    left:${props => props.Yaxis === 'two' && '33rem'} ;
    left:${props => props.Yaxis === 'three' && '1rem'} ;


    @media (max-width:750px) {
        display:none ;
    }
`
