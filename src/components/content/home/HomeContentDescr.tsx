import React from 'react';
import css from '../../../../styles/Home.module.scss';
import Image from 'next/image';
import SearchMaster from '../../form/SearchMaster';
import data from '../../../data/data.json';

export default function HomeContentDescr() {
    const { items, imageSurvey } = data.home;
    return (
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
    );
}


