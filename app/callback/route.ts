import { NextRequest, NextResponse } from "next/server";
import googleClient from "../api/google-client";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code') || ''

  try {
    const { tokens } = await googleClient.getToken(code)
    console.log(tokens)

    const response = NextResponse.redirect('http://localhost:3000')
    response.cookies.set('access_token', tokens.access_token as string, {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: 3600,
    })

    return response;
  } catch (error) {
    console.log(error)
  }


  return NextResponse.redirect('http://localhost:3000')
} 