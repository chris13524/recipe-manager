import Layout from '../components/Layout';
import { account, accountItem } from "./account.module.scss";
import useUser from '../lib/useUser';
import Router from 'next/router';
import Link from 'next/link';

export default ({ ssr }) => {
    const { user } = useUser({
      redirectTo: '/login',
    });

    return (<Layout>
        <div className={account}>
            <h1>Account</h1>
            <Link href="/account/content-history"><a className={accountItem}>View Content History</a></Link>
            <Link href="/account/update-email"><a className={accountItem}>Update Email</a></Link>
            <Link href="/account/change-password"><a className={accountItem}>Change Password</a></Link>
            <Link href="/account/change-delivery-schedule"><a className={accountItem}>Change Delivery Schedule</a></Link>
            <Link href="/account/change-content-providers"><a className={accountItem}>Change Content Providers</a></Link>
        </div>
    </Layout>);
};

export function getServerSideProps() {
    return { props: { ssr: true } };
}
