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
  const response = await fetch(`${youtubeV3Api}/search?key=${apiKey}&q=${queryString}&part=snippet&maxResults=10`)
  const data = await response.json()

  return data
}