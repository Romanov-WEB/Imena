import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from "../src/components/layout/Layout";


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Коворкинги Imena Studios</title>
      </Head>
        <main>
            <Layout />
        </main>
    </div>
  )
}

export default Home
