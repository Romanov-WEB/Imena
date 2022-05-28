import React from 'react';
import css from './LoaderPage.module.scss';

export function LoaderPage() {
    return (
        <div className={css.wrapperLoader}>
            <h1 className={css.header}>IMENA</h1>
            <h2 className={css.subHeader}>SALON STUDIOS</h2>
            <div className={css.mosaicLoader}>
                <div className={`${css.cell} ${css.d0}`} />
                <div className={`${css.cell} ${css.d1}`} />
                <div className={`${css.cell} ${css.d2}`} />
                <div className={`${css.cell} ${css.d3}`} />
                <div className={`${css.cell} ${css.d1}`} />
                <div className={`${css.cell} ${css.d2}`} />
                <div className={`${css.cell} ${css.d3}`} />
                <div className={`${css.cell} ${css.d4}`} />
                <div className={`${css.cell} ${css.d2}`} />
                <div className={`${css.cell} ${css.d3}`} />
                <div className={`${css.cell} ${css.d4}`} />
                <div className={`${css.cell} ${css.d5}`} />
                <div className={`${css.cell} ${css.d3}`} />
                <div className={`${css.cell} ${css.d4}`} />
                <div className={`${css.cell} ${css.d5}`} />
                <div className={`${css.cell} ${css.d6}`} />
            </div>
        </div>
    );
}
