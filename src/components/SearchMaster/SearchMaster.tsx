import css from './SearchMaster.module.scss';
import Image from 'next/image';
import React from 'react';

const imageUrlHome: string = '/home/';

export function SearchMaster() {
    return (
        <form id='form-search' className={css.blockFormHome}>
            <div className={css.itemFormGroup}>
                <figure className={css.imageFormHome}>
                    <Image src={imageUrlHome + 'ico-search-item.svg'} layout={'fill'} priority alt={'search-item'} />
                </figure>
                <div>
                    <input type={'search'} autoComplete='off' placeholder='Услуга' name='group' />
                </div>
                <div style={{ display: 'none' }}>
                    <ul></ul>
                    <ul></ul>
                </div>
            </div>

            <div className={css.itemFormCoworking}>
                <figure className={css.imageFormHome}>
                    <Image src={imageUrlHome + 'ico-search-map.svg'} layout={'fill'} priority alt={'ico-search-map'} />
                </figure>
                <div>
                    <input name='coworking' autoComplete={'off'} placeholder='Коворкинг' />
                </div>
                <ul style={{ display: 'none' }}></ul>
            </div>

            <div className={css.itemFormData}>
                <figure className={css.imageFormHome}>
                    <Image src={imageUrlHome + 'ico-search-date.svg'} layout={'fill'} priority alt={'ico-search'} />
                </figure>
                <div>
                    <input name='data' />
                </div>
            </div>
            <button className={css.btnFormHome} type={'submit'}>
                НАЙТИ
            </button>
        </form>
    );
}
