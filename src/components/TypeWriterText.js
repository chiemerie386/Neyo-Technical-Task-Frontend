import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from './Button';

const Title = styled.h2`
  font-size: 70px;
  font-family:  "Circular Pro", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;;
  font-weight: '900';
  text-transform: capitalize;
  width: 70%;
  color: ${(props) => props.theme.textBlack};
  align-self: flex-start;
  margin-bottom: 10px;
  

  @media (max-width: 70em) {
    font-size: 42px;

  }
  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
    font-size: 34px;
  }
  @media (max-width: 40em){
    width: 90%;
  }

`;

const Typing = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1{
    color: ${(props) => props.theme.text};
  }
  .text-2{
    color: ${(props) => props.theme.purple};
  }
  .text-3{
    color: ${(props) => props.theme.text};
  }
  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};

  }
  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  @media (max-width: 40em){
    width: 90%;
  }
  
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  font-family: "Circular Pro", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  text-transform: capitalize;
  color: ${props => props.theme.textBlack};
  font-weight:400;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};

  }

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  
`
const ButtonHolder = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin-top: 2rem;


  @media (max-width: 48em) { 

    justify-content: center;
    button{
      margin: 0 auto;
    }
  }
`
const ButtonContainer = styled.img`
 width: 35%;
  margin-right: 15px;

  @media (max-width: 48em) { 
    width: 40%;
    align-self: center;
    text-align:center;
    button{
      margin: 0 auto;
    }
  }
`

const TypeWriterText = () => {
  return (
    <>
        <Title>
        Why stop at Winning   
    </Title>
    <SubTitle>earn from being an Ace Gamer.</SubTitle>
<Typing>
<Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`<span class="text-1">Earn income while gaming.</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-2">Secure crypto wallet.</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-3">Safe community chatting.</span>`)
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      /> 
</Typing>
<ButtonHolder>
<ButtonContainer src={require('../assets/button2.png')} />
<ButtonContainer src={require('../assets/button.png')} />
</ButtonHolder>
    {/* <Button text="Explore" link="https://google.com" /> */}
    {/* <img  /> */}
    {/* </ButtonContainer> */}
    </>
  );
};

export default TypeWriterText;
