"use client";

import React, { useEffect } from "react";
import PlayList from "../components/youtube/play-list";
import { useYoutubeStore } from "../hook/useYoutubeStore";
import { searchVideoList } from "../lib/action";
import { useSearchParams } from "next/navigation";

function Page() {
  const searchParams = useSearchParams();
  const searchResult = useYoutubeStore((state) => state.searchResult);
  const setSearchResult = useYoutubeStore((state) => state.setSearchResult);
  console.log(searchResult);

  // 這邊讓頁面根據 query string 去做抓取資料的動作
  useEffect(() => {
    async function handleFirstRender() {
      if (searchParams.get("query")) {
        const query = decodeURIComponent(searchParams.get("query") || "");
        const formData = new FormData();
        formData.set("search", query);
        const result = await searchVideoList(formData);
        setSearchResult(result);
      }
    }
    handleFirstRender();
  }, [setSearchResult, searchParams]);

  return (
    <div>
      <PlayList list={searchResult.items} />
    </div>
  );
}

export default Page;
