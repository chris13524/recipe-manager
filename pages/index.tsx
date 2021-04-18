import Head from 'next/head';
import Link from 'next/link';

export default function Home({ ssr }) {
  return (
    <>
      <Head>
        <title>Learning App</title>
      </Head>

      <h1>The Learning App</h1>

      <p><Link href="/login"><a>Login</a></Link></p>
      <p><Link href="/register"><a>Register</a></Link></p>
    </>
  );
}
