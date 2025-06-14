import { NextRequest } from "next/server";
import youtubeApi from "../youtube-api";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams
  const regionCode = params.get('regionCode') || 'TW'
  const maxResults = params.get('maxResults') || '10'
  const pageToken = params.get('pageToken') || null
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=${regionCode}&maxResults=${maxResults}${pageToken ? `&pageToken=${pageToken}` : ''}`

  return await youtubeApi(req, url)
}