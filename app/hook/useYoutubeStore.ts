import { create } from 'zustand'

type YoutubeType = {
  etag?: string,
  id?: { kind: string, channelId: string },
  kind?: string,
  snippet?: Record<string, unknown>
}

type YoutubeStore = YoutubeType & {
  items: string[],
  nextPageToken: string,
  pageInfo?: { totalResults: number, resultsPerPage: number },
  regionCode: string,
}

type YoutubeAction = {
  addList: (data: string[]) => void
}

export const useYoutubeStore = create<YoutubeStore & YoutubeAction>((set) => ({
  items: [],
  nextPageToken: '',
  regionCode: '',
  addList: (data) => set(state => ({ ...state, list: [...state.items, ...data] }))
}))