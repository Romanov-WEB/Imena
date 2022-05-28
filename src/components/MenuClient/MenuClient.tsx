import React from 'react';
import css from './MenuClient.module.scss';
import Image from 'next/image';

const imageUrl = '/image/menu-client/';

export function MenuClient(): JSX.Element {
    return (
        <div className={css.menu}>
            <div className={css.container}>
                <div>
                    <h2 className={css.header}>Кабинет клиента</h2>
                    <div className={css.tabWrapper}>
                        <div>Заявки на услуги</div>
                        <div>Любимые мастера</div>
                        <div>Жалобы и предложения</div>
                    </div>
                </div>
                <div>
                    <button className={css.btmMenu}>
                        <Image src={imageUrl + 'onlineRecording.svg'} width={15} height={14} alt={'онлайн-запись'} />
                        <div>онлайн-запись</div>
                    </button>
                </div>
            </div>
        </div>
    );
}
