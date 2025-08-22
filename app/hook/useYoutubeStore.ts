import { create } from 'zustand'

type Thumbnail = { url: string; width: number; height: number }

type Thumbnails = {
  default: Thumbnail;
  high: Thumbnail;
  medium: Thumbnail;
}

export type YoutubeType = {
  etag?: string,
  id?: { kind: string, channelId?: string, videoId?: string },
  kind?: string,
  snippet?: {
    title?: string;
    description?: string;
    publishedAt?: string;
    channelTitle?: string;
    thumbnails?: Thumbnails;
    customUrl?: string,
  };
}

export type YoutubeChannelType = Omit<YoutubeType, 'id'> & {
  id: string,
  statistics: {
    viewCount: string,
    subscriberCount: string,
    hiddenSubscriberCount: boolean,
    videoCount: string
  }
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