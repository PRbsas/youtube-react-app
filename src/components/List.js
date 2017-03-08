import React from 'react';
import Items from './Items';

const List = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map((video) => {
    return (
      <Items
        onVideoSelect={onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });
  return (
    <ul>
      {videoItems}
    </ul>
  );
}

export default List;
