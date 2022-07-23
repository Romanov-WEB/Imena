import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../src/components/layout/Layout';
import HomeContentHeader from '../src/components/content/home/HomeContentHeader';
import HomeContentDescr from '../src/components/content/home/HomeContentDescr';
import LoaderPage from '../src/components/loader/LoaderPage';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Коворкинги Imena Studios</title>
            </Head>
            <LoaderPage />
            <Layout>
                <HomeContentHeader />
                <HomeContentDescr />
            </Layout>
        </div>
    );
};

export default Home;
