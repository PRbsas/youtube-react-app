import React from 'react';

const Items = ({video, onVideoSelect }) => {
  const thumbnail = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)}>
      <div className="video-items">
        <img className="items-thumbnail" alt="video" src={thumbnail} />
        <div className="items-title">{video.snippet.title}</div>
      </div>
    </li>
  );
};

export default Items;
