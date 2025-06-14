// import Request from 'next'

import { NextResponse } from 'next/server'
import googleClient from '../google-client'

export async function GET() {
  const authorizeUrl = googleClient.generateAuthUrl({
    access_type: 'offline',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/youtube.readonly',
      'https://www.googleapis.com/auth/youtube',
      'https://www.googleapis.com/auth/youtube.force-ssl',
      'https://www.googleapis.com/auth/youtubepartner',
      'https://www.googleapis.com/auth/youtubepartner-channel-audit',
      'https://www.googleapis.com/auth/youtube.upload',
      'https://www.googleapis.com/auth/youtube.channel-memberships.creator',
      'https://www.googleapis.com/auth/youtube.third-party-link.creator',
    ]
  })

  return NextResponse.redirect(authorizeUrl)
}