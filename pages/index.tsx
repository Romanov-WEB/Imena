import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from "../src/components/layout/Layout";
import HomeContentHeader from "../src/components/content/home/HomeContentHeader";
import HomeContentDescr from "../src/components/content/home/HomeContentDescr";


const Home: NextPage = () => {

    return (
        <>
            <Head>
            <title>Коворкинги Imena Studios</title>
            </Head>
            <Layout>
                <main>
                    <HomeContentHeader />
                    <HomeContentDescr />
                </main>
            </Layout>
        </>
    )
}

export default Home
