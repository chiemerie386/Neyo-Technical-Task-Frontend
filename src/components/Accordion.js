import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Minus } from '../Icons/Minus'
import { Plus } from '../Icons/Plus'



const Container = styled.div`
cursor: pointer;
padding: 1rem 0.5rem;
display: flex;
flex-direction: column;
border-bottom: 1px solid ${props => `hsla(${props.theme.gray}, 0.4)` };
margin: 3rem 0;

@media (max-width: 48em){
    margin: 2rem 0;

}
`
const Title = styled.div`
font-size: ${props => props.theme.fontmd};
font-family:  "Circular Pro", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;;
font-weight: '600';
display: flex;
justify-content: space-between;
align-items: center;


@media (max-width: 48em){
    font-size: ${props => props.theme.fontsm};


}
`
const Reveal = styled.div`
display: ${props => props.clicked ? 'inline-block' : 'none'};
margin-top: 1rem;
color: ${props => `hsla(${props.theme.gray}, 0.6)` };
font-family: "Circular Pro", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
font-size: ${props => props.theme.fontmd};


@media (max-width: 48em){
    font-size: ${props => props.theme.fontsm};


}
`

const Name = styled.div`
display: flex;
align-items: center;
`
const Indicator = styled.span`
font-size: ${props => props.theme.fontxxl};

display: flex;
justify-content: center;
align-items: center;

svg{
    width: 1rem;
    height: auto;
    fill: ${props => props.theme.carouselColor};
}

@media (max-width: 48em){
    font-size: ${props => props.theme.fontxl};


}
`

const Accordion = ({title, children, ScrollTrigger}) => {
    const [collapse, setCollapse] = useState(false);

    useEffect(() => {
        ScrollTrigger.refresh()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [collapse])
    
  return (
    <Container>
        <Title onClick={() => setCollapse(!collapse)}>
            <Name>
                <span>{title}</span>
            </Name>
            {
                collapse ? 
                <Indicator>
                    <Minus />
                </Indicator> : <Indicator>
                    <Plus />
                </Indicator>
            }
        </Title>
        <Reveal clicked={collapse}>
            {children}
        </Reveal>
    </Container>
  )
}

export default Accordion