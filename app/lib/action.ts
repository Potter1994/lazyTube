'use server'

// import { z } from 'zod'

// const SearchInputSchema = z.object({
//   search: z.string()
// })

const apiKey = process.env.GOOGLE_API_KEY
const youtubeV3Api = process.env.NEXT_PUBLIC_YOUTUBE_API_V3

export async function getPlayList() {
  const response = await fetch('/api/youtube/videos')
  const data = await response.json()

  return data
}

export async function searchVideoList({ search = '', pageToken = '' }: { search?: string, pageToken?: string }) {
  const url = `${youtubeV3Api}/search?key=${apiKey}&q=${search}&part=snippet&maxResults=20${pageToken ? `&pageToken=${pageToken}` : ''}`
  const response = await fetch(url)
  const data = await response.json()

  return data
}

export async function getVideoInfo(videoIdList: string[]) {
  const separateCommaString = videoIdList.join()
  const url = `${youtubeV3Api}/videos?key=${apiKey}&part=statistics&id=${separateCommaString}`
  const response = await fetch(url)
  const data = await response.json()
  const hashTableById = data.items.reduce((prev: Record<string, string | Record<string, string>>, curr: { id: string, statistics: { viewCount: string } }) => {
    if (curr.id) {
      prev[curr.id] = curr.statistics;
    }
    return prev
  }, {})

  return hashTableById
}

export async function getChannelById(id: string) {
  const url = `${youtubeV3Api}/channels?key=${apiKey}&id=${id}&part=snippet,statistics`
  const response = await fetch(url)
  const data = await response.json()

  return data.items[0]
}

export async function getChannelSections(channelId: string) {
  const url = `${youtubeV3Api}/channelSections?key=${apiKey}&channelId=${channelId}&part=contentDetails`
  const response = await fetch(url)
  const data = await response.json()

  return data
}

export async function getPlayListItems(playListId: string) {
  const url = `${youtubeV3Api}/playlistItems?key=${apiKey}&playlistId=${playListId}&maxResults=20&part=snippet,contentDetails`
  const response = await fetch(url)
  const data = await response.json()

  return data
}
