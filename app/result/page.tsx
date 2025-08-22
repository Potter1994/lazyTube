"use client";

import React from "react";
import PlayList from "../components/youtube/play-list";
import { useYoutubeStore } from "../hook/useYoutubeStore";

function Page() {
  const searchResult = useYoutubeStore((state) => state.searchResult);
  return (
    <div>
      <PlayList list={searchResult.items} />
    </div>
  );
}

export default Page;
