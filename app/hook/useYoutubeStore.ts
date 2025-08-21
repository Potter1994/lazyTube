import { create } from 'zustand'

export type YoutubeType = {
  etag?: string,
  id?: { kind: string, channelId?: string, videoId?: string },
  kind?: string,
  snippet?: Record<string, string | object>
}

type SearchList = {
  etag: string,
  items: YoutubeType[],
  kind: string,
  nextPageToken: string,
  pageInfo?: { totalResults: number, resultsPerPage: number },
  regionCode: string,
}

type State = YoutubeType & {
  searchResult: SearchList,
}

type Actions = {
  setSearchResult: (data: SearchList) => void
}

export const useYoutubeStore = create<State & Actions>((set) => ({
  searchResult: {
    etag: '',
    items: [],
    kind: '',
    nextPageToken: '',
    regionCode: '',
  },
  setSearchResult: (data: SearchList) => set(state => ({ ...state, searchResult: data }))
}))