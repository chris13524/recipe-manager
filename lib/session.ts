// MODIFIED FROM: https://github.com/vercel/next.js/blob/canary/examples/with-iron-session/lib/session.js

// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { NextApiRequest, NextApiResponse } from 'next'
import { Session, withIronSession } from 'next-iron-session'

export default function withSession(handler: (
  req: NextApiRequest & { session: Session },
  res: NextApiResponse
) => any) {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: 'chris13524/recipe-manager',
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === 'production' ? true : false,
    },
  })
}