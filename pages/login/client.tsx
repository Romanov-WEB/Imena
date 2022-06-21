import React, {useState} from 'react';
import css from '../../styles/Login.module.scss';
import Head from "next/head";
import Layout from "../../src/components/layout/Layout";
import AuthClient from "../../src/components/form/AuthClient";
import RegistrationClient from "../../src/components/form/RegistrationClient";

export default function Client() {
    const [toggleBlock, setToggleBlock] = useState<boolean>(false)

    return (
        <>
            <Head>
                <title>Вход для клиента | Imena Studio</title>
            </Head>
            <Layout>
                <main className={css.content}>
                    <h2 className={css.header}>Кабинет клиента</h2>
                    <div className={css.formWrapper}>
                        <div className={css.tabWrapper}>
                            <h2 onClick={() => setToggleBlock(false)}
                                className={!toggleBlock? css.btnActive: css.btn}>
                                Вход
                            </h2>
                            <h2 onClick={() => setToggleBlock(true)}
                                className={toggleBlock? css.btnActive: css.btn}>
                                Регистрация
                            </h2>
                        </div>
                        {!toggleBlock? <AuthClient />: <RegistrationClient />}
                    </div>
                </main>
            </Layout>
        </>
    );
}
