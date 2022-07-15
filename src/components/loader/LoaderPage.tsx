import React from 'react';
import css from './Loader.module.scss';

export default function LoaderPage() {
    return (
        <div className={css.wrapperLoader}>
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
