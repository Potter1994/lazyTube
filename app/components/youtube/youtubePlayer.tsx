import { YoutubeType } from "@/app/hook/useYoutubeStore";
import React from "react";

function YoutubePlayer({ info }: { info: YoutubeType }) {
  const id = info.id?.videoId;
  const { title, channelTitle } = info.snippet || {};

  if (!id) return;
  return (
    <div className='flex items-center flex-col p-4 hover:bg-gray-400 transition-colors duration-300 rounded-2xl mb-4'>
      <iframe
        id='player'
        width='560'
        height='315'
        src={`https://www.youtube.com/embed/${id}`}
        allowFullScreen
        title={`${title ? "title" : "YouTube video player"}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      />
      {typeof title === "string" && <p className=''>{title}</p>}
    </div>
  );
}

export default YoutubePlayer;
