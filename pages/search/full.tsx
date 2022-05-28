import React from 'react';
import css from 'styles/Search.module.scss';
import Head from 'next/head';
import Layout from '@components/Layout';
import SearchFull from '@components/SearchFull';

export default function Full(): JSX.Element {
    return (
        <>
            <Head>
                <title>Найти мастера или коворкинга</title>
            </Head>
            <Layout>
                <section className={css.searchFullBlock}>
                    <h2 className={css.headerFull}>
                        ПОИСК КОВОРКИНГА
                        <br />
                        ИЛИ МАСТЕРА
                    </h2>
                    <p className={css.descriptionFull}>
                        В IMENA все мастера работают на себя. Воспользуйтесь поисковой
                        <br />
                        формой, чтобы найти мастера, а также записаться онлайн.
                    </p>
                    <SearchFull />
                </section>
            </Layout>
        </>
    );
}
