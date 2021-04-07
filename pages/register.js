// MODIFIED FROM: https://github.com/vercel/next.js/blob/canary/examples/with-iron-session/pages/login.js

import { useState } from 'react'
import useUser from '../lib/useUser'
import Layout from '../components/Layout'
import fetchJson from '../lib/fetchJson'
import Link from 'next/link'
import {form} from "./form.module.scss";
import {register} from "./register.module.scss";

const Register = () => {
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
        fetchJson('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
      );
      alert("Registration successful, please login now.");
    } catch (error) {
      console.error('An unexpected error happened:', error)
      setErrorMsg(error.data.message)
    }
  }

  return (
    <Layout>
      <div className={register}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className={form}>
          <label>
            <span>Email</span>
            <input type="text" name="email" required />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" required />
          </label>

          <button type="submit">Register</button>

          {errorMsg && <p className="error">{errorMsg}</p>}
        </form>
        <p>Already have an account? Login <Link href="/login">here</Link>.</p>
      </div>
    </Layout>
  )
}

export default Register