import React from 'react';
import css from "../../../../styles/Home.module.scss";
import Image from "next/image";
import data from "../../../data/data.json"

const imageUrlHome: string = "/home/";

export default function HomeContentDescr() {
    const { items, imageSurvey } = data.home
    return (
        <section className={css.descriptionContentBg}>
            <div className={'content'}>
                <div className={css.wrapperForm}>
                    <h2 className={css.headerForm}>ОНЛАЙН-ЗАПИСЬ К МАСТЕРУ</h2>
                    <SearchFormHome />
                </div>
                <div className={css.blockIcons}>
                    {
                        items.map((item, i) => {
                            return(
                                <div className={css.wrapperIconContent} key={i}>
                                    <div className={css.iconItem}>
                                        <Image src={item.iconUrl} layout={'fill'} priority alt={''} />
                                    </div>
                                    <div className={css.textIconContent}>{item.text}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={css.blockSurvey}>
                    <div className={css.blockLeft}>
                        <h3>
                            ПОЧЕМУ КОВОРКИНГИ УДОБНЫ?
                        </h3>
                    </div>
                    <div className={css.blockRight}>
                        {imageSurvey.map((item, i) => {
                            return(
                                <div className={css.surveyContent}  key={i}>
                                    <div className={css.wrapperIconsSurvey}>
                                        <div className={css.iconSurvey}>
                                            <Image src={item.iconUrl} layout={'fill'} priority alt={''} />
                                        </div>
                                    </div>
                                    <div className={css.surveyText}>{item.text}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

function SearchFormHome() {
    return (
        <form id="form-search" className={css.blockFormHome}>
            <div className={css.itemFormGroup}>
                <figure className={css.imageFormHome}>
                    <Image src={imageUrlHome + 'ico-search-item.svg'} layout={'fill'} priority alt={'search-item'} />
                </figure>
                <div>
                    <input type={'search'} autoComplete="off"  placeholder="Услуга" name="group"/>
                </div>
                <div style={{display: 'none'}}>
                    <ul></ul>
                    <ul></ul>
                </div>
            </div>

            <div className={css.itemFormCoworking}>
                <figure className={css.imageFormHome}>
                    <Image src={imageUrlHome + 'ico-search-map.svg'} layout={'fill'} priority alt={'ico-search-map'} />
                </figure>
                <div>
                    <input name="coworking" autoComplete={'off'} placeholder="Коворкинг" />
                </div>
                <ul style={{display: 'none'}}></ul>
            </div>

            <div className={css.itemFormData}>
                <figure className={css.imageFormHome}>
                    <Image src={imageUrlHome + 'ico-search-date.svg'} layout={'fill'} priority alt={'ico-search'} />
                </figure>
                <div>
                    <input name="data" />
                </div>
            </div>
            <button className={css.btnFormHome} type={'submit'} >НАЙТИ</button>
        </form>
    );
}

