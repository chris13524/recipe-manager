// MODIFIED FROM: https://github.com/vercel/next.js/blob/canary/examples/with-iron-session/pages/login.js

import { useState } from 'react'
import useUser from '../lib/useUser'
import Layout from '../components/Layout'
import fetchJson from '../lib/fetchJson'
import Link from 'next/link'
import {form} from "./form.module.scss";
import {login} from "./login.module.scss";

export default () => {
  const { mutateUser } = useUser({
    redirectTo: '/account',
    redirectIfFound: true,
  })

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    try {
      await mutateUser(
        fetchJson('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
      )
    } catch (error) {
      console.error('An unexpected error happened:', error)
      setErrorMsg(error.data.message)
    }
  }

  return (
    <Layout>
      <div className={login}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className={form}>
          <label>
            <span>Email</span>
            <input type="text" name="email" required />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" required />
          </label>

          <button type="submit">Login</button>

          {errorMsg && <p className="error">{errorMsg}</p>}
        </form>
        <p>Don't have an account? Register <Link href="/register">here</Link>.</p>
      </div>
    </Layout>
  )
}
