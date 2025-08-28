import { useEffect, useState } from "react"
import { getVideoInfo, searchVideoList } from "../lib/action"
import { useYoutubeStore } from "./useYoutubeStore"

export default function useYoutubeSearch({ query, pageToken }: { query?: string, pageToken?: string }) {
  const { setSearchResult, setVideoStatistics } = useYoutubeStore()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [hasMore] = useState<boolean>(false)

  useEffect(() => {
    async function fetchSearchVideoList() {
      setIsLoading(true)
      const response = await searchVideoList({ search: query, pageToken: pageToken })
      const videoIdList = response.items
        .filter((i: { id?: { videoId: string } }) => i.id?.videoId)
        .map((i: { id: { videoId: string } }) => i.id.videoId);
      const videoInfoHashTable = await getVideoInfo(videoIdList);

      setVideoStatistics(videoInfoHashTable)
      setSearchResult(response)
      setIsLoading(false)
    }

    fetchSearchVideoList()

  }, [query, pageToken, setSearchResult, setVideoStatistics])

  return { isLoading, hasMore }
}
