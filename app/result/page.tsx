"use client";

import React, { useCallback, useRef, useState } from "react";
import { useYoutubeStore } from "../hook/useYoutubeStore";
import { useSearchParams } from "next/navigation";
import PlayList from "../components/youtube/play-list";
import useYoutubeSearch from "../hook/useYoutubeSearch";

function Page() {
  const [pageToken, setPageToken] = useState<string>();
  const observer = useRef<IntersectionObserver>(null);
  const searchParams = useSearchParams();
  const { searchResult } = useYoutubeStore();
  const { isLoading } = useYoutubeSearch({
    query: searchParams.get("query") || undefined,
    pageToken: pageToken,
  });

  const loadMoreElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageToken(searchResult.nextPageToken);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, searchResult]
  );

  return (
    <div>
      {/* <MobileYoutubeList /> */}
      <PlayList list={searchResult.items} />
      <div ref={loadMoreElementRef} className='bottom h-1 w-full' />
    </div>
  );
}

export default Page;
