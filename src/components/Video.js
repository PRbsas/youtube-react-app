import React from 'react';

const Video = ({video}) => {

  const Loading = () =>
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>

  if(!video) {
    return <div>{Loading}</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <div>
        <iframe className="video" src={url}></iframe>
      </div>
      <div>
        <div className="video-title">{video.snippet.title}</div>
        <div className="video-description">{video.snippet.description}</div>
      </div>
    </div>
  )
};

export default Video;
