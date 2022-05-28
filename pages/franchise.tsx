import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Layout from '@components/Layout';
import css from 'styles/Franchise.module.scss';
import Form from '@components/Form';
import Input from '@components/Input';
import { loadImage } from 'src/shared/common';

const image = '/bg/form-bg.png';

function Franchise(): JSX.Element | undefined {
    const refStyle: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

    useEffect(() => {
        loadImage(image).then(() => {
            refStyle.current!.style.backgroundImage = `url(${image})`;
        });
    }, []);

    return (
        <>
            <Head>
                <title>ФРАНШИЗА | Imena Studio</title>
            </Head>
            <Layout>
                <section ref={refStyle} className={css.sectionForm}>
                    <div className={css.formContainer}>
                        <Form idForm={'franchise'}>
                            <>
                                <Input text={'Ваше имя*'} name={'name'} classNames={css.label} classText={css.text} />
                                <Input text={'Ваш email*'} name={'email'} classNames={css.label} classText={css.text} />
                                <Input
                                    text={'Номер телефона*'}
                                    name={'phone'}
                                    classNames={css.label}
                                    classText={css.text}
                                />
                                <Input
                                    text={'Адрес вашего помещения'}
                                    name={'address'}
                                    classNames={css.label}
                                    classText={css.text}
                                />
                            </>
                        </Form>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Franchise;
