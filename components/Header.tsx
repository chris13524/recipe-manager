// MODIFIED FROM: https://github.com/vercel/next.js/blob/canary/examples/with-iron-session/components/Header.js

import React from 'react';
import Link from 'next/link';
import useUser from '../lib/useUser';
import Router from 'next/router';
import fetchJson from '../lib/fetchJson';

const Header = () => {
  const { user, mutateUser } = useUser();
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/account">
              <a>Account</a>
            </Link>
          </li>
          {user?.isLoggedIn && (
            <li>
              <Link href="/login">
                <a onClick={async (e) => {
                  e.preventDefault()
                  await mutateUser(fetchJson('/api/logout'))
                  Router.push('/login')
                }}>
                  Logout
                </a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <style jsx>{`
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
          display: flex;
        }
        li:first-child {
          margin-left: auto;
        }
        a {
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        a img {
          margin-right: 1em;
        }
        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
      `}</style>
    </header>
  );
};

export default Header;
