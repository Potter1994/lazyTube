"use client";
import React, { useEffect, useState } from "react";
import YoutubePlayer from "./youtubePlayer";

function PlayList() {
  const [youtubeList, setYoutubeList] = useState([]);
  useEffect(() => {
    fetch("/api/youtube/videos")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setYoutubeList(res.items);
      });
  }, []);

  console.log(youtubeList);
  return (
    <div className='mx-auto w-fit'>
      {youtubeList.map((i) => (
        <YoutubePlayer key={i.id} id={i.id} />
      ))}
    </div>
  );
}

export default PlayList;
