import { create } from 'zustand'

type BasicType = {
  kind: string,
  etag: string,
  id: string,
}

export type SearchType = Omit<BasicType, 'id'> & {
  id: {
    kind: string,
    videoId: string,
    channelId: string,
    playlistId: string,
  },
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: Record<string, Record<string, string | number>>
  }
}

export type SearchResult = {
  etag: string,
  items: SearchType[],
  kind: string,
  nextPageToken: string,
  pageInfo?: { totalResults: number, resultsPerPage: number },
  regionCode: string,
}

export type VideoStatistics = {
  viewCount: string,
  likeCount: string,
  favoriteCount: string,
  commentCount: string,
}

type Thumbnail = { url: string; width: number; height: number }

type Thumbnails = {
  default: Thumbnail;
  high: Thumbnail;
  medium: Thumbnail;
}

export type YoutubeChannelType = BasicType & {
  statistics: {
    viewCount: string,
    subscriberCount: string,
    hiddenSubscriberCount: boolean,
    videoCount: string
  },
  snippet: {
    thumbnails: Thumbnails,
    title: string,
    description: string,
    customUrl: string
  }
}

type State = {
  searchResult: SearchResult,
  videoStatistics: Record<string, VideoStatistics>
}

type Actions = {
  setSearchResult: (data: SearchResult) => void,
  setVideoStatistics: (data: Record<string, VideoStatistics>) => void,
}

export const useYoutubeStore = create<State & Actions>((set) => ({
  searchResult: {
    etag: '',
    items: [],
    kind: '',
    nextPageToken: '',
    regionCode: '',
  },
  videoStatistics: {},
  setSearchResult: (data: SearchResult) => set(state => ({ ...state, searchResult: { ...data, items: [...state.searchResult.items, ...data.items] } })),
  setVideoStatistics: (data: Record<string, VideoStatistics>) => set(state => ({
    ...state, videoStatistics: {
      ...state.videoStatistics,
      ...data,
    }
  }))
}))