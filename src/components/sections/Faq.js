import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';
import bg from "../../assets/Tai_bg.svg"


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.purple};
background-image: url( ${bg});
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  align-self: center;
  }
  @media (max-width: 48em){
  width: 90%;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title=" How can I get to play the games and do I have to pay anything?" >
 
  By registering with Tai Guild Games as a scholar. We then facilitate a brief training then allocate login in details and you good to go. What is amazing is all this is free!
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="Will I be assisted on how to play the games and how to convert the Cryptocurrency into my local currency?" >
  Yes, Tai Guild Games game masters will be available to help scholars learn how to play the various games on selection. Tech teams will be available around the clock to assist with any technical issues that may arise.

  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="What does Play2Earn mean?" >
  Just as the name suggest, one earns money by playing the blockchain games.
  </Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="How does it work and how do I get paid?" >
During game play one earns Tokens which are actual cryptocurrencies. The number of Tokens one earns through wins or completing tasks are later redeemed for actual fiat currency like US Dollars or one’s local currency.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="What other benefits do I get apart from earning money?
" >
Aside from been part of an awesome family, there will be competitions where ace players will receive cash rewards. Once the DAO is fully rolled out, holders of $TGG Token will participate in decision making.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT IS THE FUSION PROCESS?
" >
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem, maxime, similique neque minus aliquam dolore doloremque laboriosam, facilis quibusdam unde sint officia.
  </Accordion>
</Box>
    </Container>
    </Section>
  )
}

export default Faq