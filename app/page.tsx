"use client";
import PlayList from "@/app/components/youtube/play-list";

import { useYoutubeStore } from "./hook/useYoutubeStore";

export default function Home() {
  const searchResult = useYoutubeStore((state) => state.searchResult);
  // const videoId = searchResult.items[1].id!.videoId;
  // console.log(searchResult.items[1].id!.videoId);
  return (
    <div>
      <PlayList list={searchResult.items} />
      {/* <iframe
        width='430'
        height='244'
        src={`https://www.youtube.com/embed/${videoId}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      /> */}
    </div>
  );
}
