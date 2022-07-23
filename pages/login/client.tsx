import React, { useEffect, useRef, useState } from 'react';
import css from '../../styles/Login.module.scss';
import Head from 'next/head';
import Layout from '../../src/components/layout/Layout';
import AuthClient from '../../src/components/form/AuthClient';
import RegistrationClient from '../../src/components/form/RegistrationClient';

const image = '/bg/bgLogin.jpg';

export default function Client() {
    const [toggleBlock, setToggleBlock] = useState<boolean>(false);
    const refStyle: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

    function load(src: string) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.addEventListener('load', resolve);
            image.addEventListener('error', reject);
            image.src = src;
        });
    }

    useEffect(() => {
        load(image).then(() => {
            refStyle.current!.style.backgroundImage = `url(${image})`;
        });
    }, []);

    return (
        <>
            <Head>
                <title>Вход для клиента | Imena Studio</title>
            </Head>
            <Layout>
                <div id={'bg'} ref={refStyle} className={css.content}>
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
}
