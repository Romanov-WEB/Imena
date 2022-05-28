import React from 'react';
import css from 'styles/Search.module.scss';
import Layout from '@components/Layout';
import SearchMaster from '@components/SearchMaster';
import Head from 'next/head';

export default function Master(): JSX.Element {
    return (
        <>
            <Head>
                <title>Поиск мастера - Каворкинги</title>
            </Head>
            <Layout>
                <section className={css.searchMasterBlock}>
                    <div className={css.content}>
                        <h2 className={css.headerMaster}>ОНЛАЙН-ЗАПИСЬ</h2>
                        <p className={css.descriptionMaster}>
                            Назначьте встречу с одним из мастеров Imena Studios. Чтобы узнать больше информации о
                            мастере, перейдите на его страницу, кликнув на имя или фотографию мастера.
                        </p>
                        <SearchMaster />
                    </div>
                </section>
            </Layout>
        </>
    );
}
