import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { page } from "./page.module.scss";

const RegisterSuccessful = () => {
    return (
        <>
            <Head>
                <title>Registration Successful</title>
            </Head>
            <Layout>
                <div className={page}>
                    <h1>Registration Successful</h1>
                    <p>You have successfully registered! You can now login <Link href="/login"><a>here</a></Link>.</p>
                </div>
            </Layout>
        </>
    );
};

export default RegisterSuccessful;