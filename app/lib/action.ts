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

export async function searchVideoList(formData: FormData) {
  const queryString = formData.get('search')
  const url = `${youtubeV3Api}/search?key=${apiKey}&q=${queryString}&part=snippet&maxResults=20`
  const response = await fetch(url)
  const data = await response.json()

  return data
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

// export async function getPlayListItems(playListId) {

// }