import React from 'react';
import Layout from '../../src/components/Layout';
import Head from 'next/head';
import css from '../../styles/Login.module.scss';
import AuthMaster from '../../src/components/AuthMaster';
import { NextPageContext } from 'next';

const Master = (userAgent: string): JSX.Element => {
    console.log(userAgent);
    return (
        <>
            <Head>
                <title>Вход для мастера | Imena Studio</title>
            </Head>
            <Layout>
                <main className={css.content}>
                    <h2 className={css.header}>Вход в кабинет мастера</h2>
                    <div className={css.formWrapper}>
                        <AuthMaster />
                    </div>
                </main>
            </Layout>
        </>
    );
};

//TODO 'test remove'
Master.getInitialProps = async (ctx: NextPageContext) => {
    const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent;
    // console.log(userAgent);
    return { userAgent };
};

export default Master;
