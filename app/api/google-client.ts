import { OAuth2Client } from 'google-auth-library'

const { GOOGLE_CLIENT_ID, GOOGLE_SECRET_KEY, HOST } = process.env
const googleClient = new OAuth2Client({
  clientId: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_SECRET_KEY,
  redirectUri: `${HOST}/callback`
})

export default googleClient