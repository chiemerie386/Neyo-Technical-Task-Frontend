import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from './Button';

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  font-weight: bold;
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  

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

const Typing = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  width: 80%;
  /* color: ${(props) => props.theme.text}; */
  align-self: flex-start;
span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1{
      color:  purple;
  }
  .text-2{
      color: black;
  }
  .text-3{
      color: blue;
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
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textBlack}, 0.4)`};
  font-weight:600;
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

const ButtonContainer = styled.div`
 width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) { 
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
            .typeString(`<span class="text-2">Secure crypto wallet system</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-3">Safe community chatting system.</span>`)
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      /> 
</Typing>
    <ButtonContainer>
    <Button text="Explore" link="https://google.com" />
    </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
