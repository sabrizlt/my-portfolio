import React from 'react';
import medium from '../video/medium.mp4'
import meteo from '../video/meteo.mp4'
import linkedin from '../video/linkedin.mp4'
import spotify from '../video/spotify.mp4'
import airsabri from '../video/airsabri.mp4'

const MyComponent = () => {
  return (
    <>
     <div class="text-white mx-auto rounded sottotitolo-project mt-5  d-flex align-items-center justify-content-center">
        <h2 class="m-0 ">MEDIUM</h2>
      </div>
    <div className='video-progetto2'  >
      <video controls autoPlay loop className='w-75 mt-5 border-video '>
        <source src={medium} type="video/mp4" style={{width: '100px'}}/>
      </video>
    </div>
    <div class="text-white mx-auto rounded sottotitolo-project mt-5  d-flex align-items-center justify-content-center">
        <h2 class="m-0 ">SPOTIFY </h2>
      </div>
      <div className='video-progetto2'  >
      <video controls autoPlay loop className='w-75 mt-5 border-video '>
        <source src={spotify} type="video/mp4" style={{width: '100px'}}/>
      </video>
    </div>
    <div class="text-white mx-auto rounded sottotitolo-project mt-5  d-flex align-items-center justify-content-center">
        <h2 class="m-0 ">METEO</h2>
      </div>
      <div className='video-progetto2'  >
      <video controls autoPlay loop className='w-75 mt-5 border-video '>
        <source src={meteo} type="video/mp4" style={{width: '100px'}}/>
      </video>
    </div>
    <div class="text-white mx-auto rounded sottotitolo-project mt-5  d-flex align-items-center justify-content-center">
        <h2 class="m-0 ">LINKEDIN </h2>
      </div>
      <div className='video-progetto2'  >
      <video controls autoPlay loop className='w-75 mt-5 border-video '>
        <source src={linkedin} type="video/mp4" style={{width: '100px'}}/>
      </video>
    </div>
    <div class="text-white mx-auto rounded sottotitolo-project mt-5  d-flex align-items-center justify-content-center">
        <h2 class="m-0 ">AIRSABRI </h2>
      </div>
      <div className='video-progetto2'>
      <video controls autoPlay loop className='w-75 mt-5 border-video  '>
        <source src={airsabri} type="video/mp4" style={{width: '100px'}}/>
      </video>
    </div>
    </>
  );
};

export default MyComponent;
