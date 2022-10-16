import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/Home Video.mp4'
import Tai from '../assets/TaiProduct.png'


const VideoContainer = styled.div`
width: 80%;
height: 50%;
.img{
width: 40rem;
}
video{
    width: 100%;
    height: auto;
}

@media (max-width: 64em) {
  min-width: 40vh;
  .img{
width: 100%;
}
}

`

const CoverVideo = () => {
  return (
    <VideoContainer>
        {/* <video src={GIF} type="video/mp4" autoPlay muted loop  /> */}
        <img className='img'   src={Tai}/>
    </VideoContainer>
  )
}

export default CoverVideo