import Layout from '../../components/Layout';
import { page } from "../page.module.scss";
import { accountItem } from "./account.module.scss";
import useUser from '../../lib/useUser';
import Link from 'next/link';
import Head from 'next/head';

const AccountIndex = () => {
  const { user } = useUser({
    redirectTo: '/login',
  });

  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <Layout>
        <div className={page}>
          <h1>Account</h1>
          <Link href="/account/content-history"><a className={accountItem}>View Content History</a></Link>
          <Link href="/account/update-email"><a className={accountItem}>Update Email</a></Link>
          <Link href="/account/change-password"><a className={accountItem}>Change Password</a></Link>
          <Link href="/account/change-delivery-schedule"><a className={accountItem}>Change Delivery Schedule</a></Link>
          <Link href="/account/change-content-providers"><a className={accountItem}>Change Content Providers</a></Link>
        </div>
      </Layout>
    </>
  );
};
export default AccountIndex;
