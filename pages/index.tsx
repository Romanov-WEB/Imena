import type { NextPage } from 'next';
import css from '../styles/Home.module.scss';
import Head from 'next/head';
import Layout from '../src/components/layout/Layout';
import HomeContentHeader from '../src/components/content/home/HomeContentHeader';
import HomeContentDescr from '../src/components/content/home/HomeContentDescr';
import { useEffect, useState } from 'react';
import LoaderPage from '../src/components/loader/LoaderPage';

const Home: NextPage = () => {
    const [loader, setLoader] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setLoader(true);
        }, 1500);
    }, []);

    if (!loader) {
        return <LoaderPage />;
    }
    return (
        <>
            <Head>
                <title>Коворкинги Imena Studios</title>
            </Head>
            <Layout>
                <main className={css.main}>
                    <HomeContentHeader />
                    <HomeContentDescr />
                </main>
            </Layout>
        </>
    );
};

export default Home;
