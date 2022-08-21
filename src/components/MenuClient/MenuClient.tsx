import React from 'react';
import css from './MenuClient.module.scss';
import Image from 'next/image';
import { observer } from 'mobx-react';

const imageUrl = '/image/menu-client/';

interface MenuClientProps {
    menuClientIndex: any;
}

export const MenuClient = observer(({ menuClientIndex }: MenuClientProps): JSX.Element => {
    return (
        <div className={css.menu}>
            <div className={css.container}>
                <div>
                    <h2 className={css.header}>Кабинет клиента</h2>
                    <div className={css.tabWrapper}>
                        <div onClick={() => menuClientIndex.onIndexMenu(0)}>Заявки на услуги</div>
                        <div onClick={() => menuClientIndex.onIndexMenu(1)}>Любимые мастера</div>
                        <div onClick={() => menuClientIndex.onIndexMenu(1)}>Жалобы и предложения</div>
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
