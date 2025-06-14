import { NextRequest, NextResponse } from "next/server";

export default async function youtubeApi(req: NextRequest, apiUrl: string) {
  const accessToken = req.cookies.get('access_token')

  if (!accessToken || !accessToken.value) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const res = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${accessToken.value}`
    }
  })

  const data = await res.json()
  return NextResponse.json(data)
}