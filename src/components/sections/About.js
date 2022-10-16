import React, { lazy, Suspense } from 'react'
import styled, { ThemeProvider } from 'styled-components'
// import Carousel from '../Carousel'
import Button from '../Button'
import {dark} from '../../styles/Themes';
import Loading from '../Loading';
import bg from "../../assets/Tai_bg.svg"


const Carousel = lazy(() => import("../Carousel"));

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.textBlack};
/* background-image: url('../../assets/TaiProduct1.png'); */
/* background-blend-mode: screen; */
/* background: '#0583F2'; */
  background-image: url(${bg}); /* fallback */
  /* background-image: url("../../assets/Tai_bg.svg"), linear-gradient( #d13531); */
display: flex;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;


`
const Container = styled.div`
width: 75%;
margin: 0 auto;
/* background-color: lightblue; */

display: flex;
justify-content: center;
align-items: center;
@media (max-width: 70em){
  width: 85%;
}

@media (max-width: 64em){
  width: 100%;
  flex-direction: column;

  &>*:last-child{
    width: 80%;
  }
}
@media (max-width: 40em){
  

  &>*:last-child{
    width: 90%;
  }
}
`
const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){
  min-height: 50vh;
}
`
 
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  font-family:  "Circular Pro", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;;
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
margin: 0 auto;

@media (max-width: 64em){
  width: 100%;
  text-align:center;
}
@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontxl};

}
@media (max-width: 30em){
  font-size: ${(props) => props.theme.fontlg};

}
`
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
color: hsla(0, 0%, 100%, 0.8);
  font-weight: 350;
  font-family: "Circular Pro", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  align-self: flex-start;
  width: 80%;
margin: 1rem auto;
/* font-weight:400; */
@media (max-width: 64em){
  width: 100%;
  text-align:center;
  font-size: ${(props) => props.theme.fontmd};

}
@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontmd};

}
@media (max-width: 30em){
  font-size: ${(props) => props.theme.fontsm};

}

`

const ButtonContainer = styled.div`
 width: 80%;
 margin: 1rem auto;
 display: flex;
  align-self: flex-start;

  @media (max-width: 64em){
width: 100%;

a{
  margin: 0 auto;
}
}

`

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box> 
        <Suspense fallback={<Loading />}>
          <Carousel /> </Suspense> </Box>
        <Box> 
        <Title>
       ABOUT US
        </Title>
        <SubText>
        Tai Guild Games is a Block-Chain-App based Guild that seeks to incorporate all the necessary services Play2Earn enthusiast and neophytes alike need for a seamless Web3 experience. We understand the scarcity of information available regarding Web3 and GameFi in developing countries, we are here to unpack that for you.
        </SubText>
        {/* <SubTextLight>
        With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
        </SubTextLight> */}
        <ButtonContainer>
        <Button text="Join Our Waitlist" link="#" />
        </ButtonContainer>
         </Box>
      </Container>
    </Section>
  )
}

export default About