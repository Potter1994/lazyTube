"use client";
import React from "react";
// import YoutubePlayer from "./youtubePlayer";
// import { getPlayList } from "@/app/lib/action";

function PlayList() {
  // const [youtubeList, setYoutubeList] = useState([]);
  // useEffect(() => {
  //   fetch("/api/youtube/videos")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setYoutubeList(res.items);
  //     });
  // }, []);

  // console.log(youtubeList);

  return (
    <div className='mx-auto w-fit'>
      {/* {youtubeList?.length &&
        youtubeList.map((i) => <YoutubePlayer key={i.id} id={i.id} />)} */}
    </div>
  );
}

export default PlayList;
