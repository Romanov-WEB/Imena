import React from 'react';
import css from 'styles/Contacts.module.scss';
import Layout from '@components/Layout';
import Maps from '@components/Maps';
import Head from 'next/head';

export default function Contacts(): JSX.Element {
    return (
        <>
            <Head>
                <title>Контакты - Коворкинги</title>
            </Head>
            <Layout>
                <div className={css.wrapperContacts}>
                    <Maps />
                    <div className={css.wrapperCardInfo}>
                        <h1 className={css.infoHeader}>Контакты</h1>
                        <div className={css.cardInfo}>
                            <div>
                                <h2>Адрес:</h2>
                                <p>119361, г.Москва, ул.Лобачевского, д.118, к.4</p>
                            </div>
                            <div>
                                <h2>По всем вопросам:</h2>
                                <p>info@imenastudios.com</p>
                            </div>
                            <div>
                                <h2>По вопросам аренды:</h2>
                                <p>anna@imenastudios.com</p>
                                <p>+7 (495) 023-87-50</p>
                            </div>
                            <div>
                                <h2>По вопросам Франшизы:</h2>
                                <p>info@imenastudios.com</p>
                                <p>+7 (495) 085-10-18</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
