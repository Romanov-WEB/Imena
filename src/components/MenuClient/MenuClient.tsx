import React from 'react';
import css from './MenuClient.module.scss';
import Image from 'next/image';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import menuClientIndex from '@store/MenuClientStore';

const imageUrl = '/image/menu-client/';

export const MenuClient = observer((): JSX.Element => {
    const onToggleActiveItem = (index: number): string => {
        return menuClientIndex.index === index ? css.activeItem : '';
    };

    return (
        <div className={css.menu}>
            <div className={css.container}>
                <div>
                    <h2 className={css.header}>Кабинет клиента</h2>
                    <div className={css.tabWrapper}>
                        <div
                            onClick={() => menuClientIndex.onIndexMenu(0)}
                            className={classNames([css.item, onToggleActiveItem(0)])}
                        >
                            Заявки на услуги
                        </div>
                        <div
                            onClick={() => menuClientIndex.onIndexMenu(1)}
                            className={classNames([css.item, onToggleActiveItem(1)])}
                        >
                            Любимые мастера
                        </div>
                        <div
                            onClick={() => menuClientIndex.onIndexMenu(2)}
                            className={classNames([css.item, onToggleActiveItem(2)])}
                        >
                            Жалобы и предложения
                        </div>
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
});
