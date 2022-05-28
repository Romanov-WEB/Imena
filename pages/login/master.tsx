import React, { useEffect, useRef } from 'react';
import Layout from '@components/Layout/';
import Head from 'next/head';
import css from 'styles/Login.module.scss';
import AuthMaster from '@components/AuthMaster';
import { loadImage } from '../../src/shared/common';
import { NextPage } from 'next';

const image = '/bg/bgLogin.jpg';

const Page: NextPage = () => {
    const refStyle: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

    useEffect(() => {
        loadImage(image).then(() => {
            refStyle.current!.style.backgroundImage = `url(${image})`;
        });
    }, []);
    return (
        <>
            <Head>
                <title>Вход для мастера | Imena Studio</title>
            </Head>
            <Layout>
                <main ref={refStyle} className={css.content}>
                    <h2 className={css.header}>Вход в кабинет мастера</h2>
                    <div className={css.formWrapper}>
                        <AuthMaster />
                    </div>
                </main>
            </Layout>
        </>
    );
};

export default Page;
