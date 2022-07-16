import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../src/components/layout/Layout';
import HomeContentHeader from '../src/components/content/home/HomeContentHeader';
import HomeContentDescr from '../src/components/content/home/HomeContentDescr';
import { useEffect, useState } from 'react';
import LoaderPage from '../src/components/loader/LoaderPage';

const Home: NextPage = () => {
    const [loader, setLoader] = useState<boolean>(false);
    const onPreloader = (time: number) => {
        setTimeout(() => {
            setLoader(true);
        }, time);
    };

    useEffect(() => {
        window.onload = function () {
            onPreloader(1000);
        };
    }, []);
    useEffect(() => {
        onPreloader(1500);
    }, []);

    return (
        <>
            <Head>
                <title>Коворкинги Imena Studios</title>
            </Head>
            {!loader ? (
                <LoaderPage />
            ) : (
                <Layout>
                    <HomeContentHeader />
                    <HomeContentDescr />
                </Layout>
            )}
        </>
    );
};

export default Home;
