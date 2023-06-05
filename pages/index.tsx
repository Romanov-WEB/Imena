import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@components/Layout';
import LoaderPage from '@components/LoaderPage';
import css from 'styles/Home.module.scss';
import React, { useEffect, useRef } from 'react';
import SearchMaster from '@components/SearchMaster';
import Image from 'next/image';
import data from '../src/data/data.json';
// @ts-ignore
import { loadImage } from '../src/shared/common';
import { AnimatePresence, motion } from 'framer-motion'

const image = '/home/img-slider-2.jpg';
const Page: NextPage = () => {
    const refStyle: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const { items, imageSurvey } = data.home;

    useEffect(() => {
        loadImage(image).then(() => {
            refStyle.current!.style.backgroundImage = `url(${image})`;
        });
    }, []);

    const leftContentAnimation = {
        hidden: {
            x: -100,
                opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.3 },
        }),
    }

    return (
        <div>
            <Head>
                <title>Коворкинги Imena Studios</title>
            </Head>
            <LoaderPage />
            <Layout>
                <motion.section className={css.wrapperTopContent}
                                initial='hidden'
                                whileInView='visible'
                                custom={10}
                                variants={leftContentAnimation}
                >
                    <div ref={refStyle} className={css.imageTop} />
                    <div className={css.descriptionWrapper}>
                        <div className={css.descriptionHeaderContent}>
                            <h1>Коворкинги Imena Studios</h1>
                            <p>
                                Аренда студий для мастеров красоты и здоровья. Сообщество профессионалов. Мы помогаем
                                мастерам зарабатывать больше.
                            </p>
                            <div>
                                <a>Подробнее</a>
                            </div>
                        </div>
                    </div>
                </motion.section>
                <section className={css.descriptionContentBg}>
                    <div className={'content'}>
                        <div className={css.wrapperForm}>
                            <h2 className={css.headerForm}>ОНЛАЙН-ЗАПИСЬ К МАСТЕРУ</h2>
                            <SearchMaster />
                        </div>
                        <div className={css.blockIcons}>
                            {items.map((item, i) => {
                                return (
                                    <div className={css.wrapperIconContent} key={i}>
                                        <div className={css.iconItem}>
                                            <Image src={item.iconUrl} layout={'fill'} priority alt={'image'} />
                                        </div>
                                        <div className={css.textIconContent}>{item.text}</div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={css.blockSurvey}>
                            <div className={css.blockLeft}>
                                <h3>ПОЧЕМУ КОВОРКИНГИ УДОБНЫ?</h3>
                            </div>
                            <div className={css.blockRight}>
                                {imageSurvey.map((item, i) => {
                                    return (
                                        <div className={css.surveyContent} key={i}>
                                            <div className={css.wrapperIconsSurvey}>
                                                <div className={css.iconSurvey}>
                                                    <Image src={item.iconUrl} layout={'fill'} priority alt={'image'} />
                                                </div>
                                            </div>
                                            <div className={css.surveyText}>{item.text}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    );
};

export default Page;
