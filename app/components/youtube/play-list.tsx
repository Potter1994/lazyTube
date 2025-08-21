"use client";
import { YoutubeType } from "@/app/hook/useYoutubeStore";
import React from "react";
import YoutubePlayer from "./youtubePlayer";

function PlayList({ list }: { list: YoutubeType[] }) {
  console.log(list);

  return (
    <div className='mx-auto grid grid-cols-4'>
      {!!list?.length &&
        list.map((i: YoutubeType) => <YoutubePlayer key={i.etag} info={i} />)}
    </div>
  );
}

export default PlayList;
