import React from 'react';
import css from './SearchFull.module.scss';

export function SearchFull() {
    return (
        <form className={css.blockSearchFull} id='search-full'>
            <input
                className={css.searchFullInput}
                name='searchFull'
                type='text'
                placeholder='Имя мастера или местоположение'
            />
            <button className={css.btnFull}>Найти</button>
        </form>
    );
}
