import React from 'react';
import Layout from "../../src/components/layout/Layout";
import Head from "next/head";
import css from "../../styles/Login.module.scss";

export default function Master() {
    const urlIcon: string = './icons/';
    return (
        <>
            <Head>
                <title>Вход для мастера | Imena Studio</title>
            </Head>
            <Layout>
                <main className={css.content}>
                    <h2>Вход в кабинет мастера</h2>
                    <div>

                    </div>
                </main>
            </Layout>
        </>
    );
}
