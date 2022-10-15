import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/Home Video.mp4'
import Tai from '../assets/TaiProduct.png'


const VideoContainer = styled.div`
width: 50%;
height: 50%;

video{
    width: 100%;
    height: auto;
}

@media (max-width: 64em) {
  min-width: 40vh;
}

`

const CoverVideo = () => {
  return (
    <VideoContainer>
        {/* <video src={GIF} type="video/mp4" autoPlay muted loop  /> */}
        <img width={600}  src={Tai}/>
    </VideoContainer>
  )
}

export default CoverVideo