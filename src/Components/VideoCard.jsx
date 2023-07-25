import React from 'react';
import YouTube from 'react-youtube';


function VideoOverlayExample() {
  const videoId = 'NnKs9NDzvVs'; // ID del video di YouTube

  const opts = {
    height: '400',
    width: '640',
    playerVars: {
      autoplay: 1, // Imposta l'autoplay a 1 per far partire automaticamente il video
      loop: 1, // Imposta il loop a 1 per riprodurre il video in loop
      mute: 1, // Imposta il mute a 1 per disattivare l'audio del video
    },
  };

  return (
    <div className="w-50 border-0 mt-5 videoComiso">
        <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default VideoOverlayExample;
