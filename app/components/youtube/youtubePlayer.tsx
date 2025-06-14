import React from "react";

interface YoutubePlayerProps {
  id: string;
  title?: string;
}

function YoutubePlayer({ id, title }: YoutubePlayerProps) {
  return (
    <iframe
      id='player'
      width='560'
      height='315'
      src={`https://www.youtube.com/embed/${id}`}
      allowFullScreen
      title={`${title ? title : "YouTube video player"}`}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    />
  );
}

export default YoutubePlayer;
