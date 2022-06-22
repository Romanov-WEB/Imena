import React from 'react';
import Layout from "../../src/components/layout/Layout";
import Head from "next/head";
import css from "../../styles/Login.module.scss";
import AuthMaster from "../../src/components/form/AuthMaster";

export default function Master() {

    return (
        <>
            <Head>
                <title>Вход для мастера | Imena Studio</title>
            </Head>
            <Layout>
                <main className={css.content}>
                    <h2  className={css.header}>Вход в кабинет мастера</h2>
                    <div className={css.formWrapper}>
                        <AuthMaster />
                    </div>
                </main>
            </Layout>
        </>
    );
}
