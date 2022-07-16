import React from 'react';
import css from '../../../../styles/Home.module.scss';

export default function HomeContentHeader() {
    return (
        <section className={css.wrapperTopContent}>
            <div className={css.imageTop} />
            <div className={css.descriptionWrapper}>
                <div className={css.descriptionHeaderContent}>
                    <h1>Коворкинги Imena Studios</h1>
                    <p>
                        Аренда студий для мастеров красоты и здоровья. Сообщество профессионалов. Мы помогаем мастерам
                        зарабатывать больше.
                    </p>
                    <div>
                        <a>Подробнее</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
