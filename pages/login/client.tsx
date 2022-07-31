import React, { useEffect, useRef, useState } from 'react';
import css from '../../styles/Login.module.scss';
import Head from 'next/head';
import Layout from '../../src/components/Layout';
import AuthClient from '../../src/components/AuthClient';
import RegistrationClient from '../../src/components/RegistrationClient';
import { loadImage } from '../../src/shared/common';

const image = '/bg/bgLogin.jpg';

const Client = (): JSX.Element => {
    const [toggleBlock, setToggleBlock] = useState<boolean>(false);
    const refStyle: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

    useEffect(() => {
        loadImage(image).then(() => {
            refStyle.current!.style.backgroundImage = `url(${image})`;
        });
    }, []);

    return (
        <>
            <Head>
                <title>Вход для клиента | Imena Studio</title>
            </Head>
            <Layout>
                <div ref={refStyle} className={css.content}>
                    <h2 className={css.header}>Кабинет клиента</h2>
                    <div className={css.formWrapper}>
                        <div className={css.tabWrapper}>
                            <h2
                                onClick={() => setToggleBlock(false)}
                                className={!toggleBlock ? css.btnActive : css.btn}
                            >
                                Вход
                            </h2>
                            <h2 onClick={() => setToggleBlock(true)} className={toggleBlock ? css.btnActive : css.btn}>
                                Регистрация
                            </h2>
                        </div>
                        {!toggleBlock ? <AuthClient /> : <RegistrationClient />}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Client;
