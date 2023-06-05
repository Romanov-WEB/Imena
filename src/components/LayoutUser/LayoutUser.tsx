import React from 'react';
import Image from 'next/image';
import css from './LayoutUser.module.scss';
import Link from 'next/link';
import FooterBottomBlock from '@components/FooterBottomBlock';
import bd from '../../data/data.json';
import { NextRouter, useRouter } from 'next/router';
import { deleteCookie } from '../../shared/common';
import { observer } from 'mobx-react';
import menuClientStore from '@store/MenuClientStore';

const Logo: string = '/image/header/logo.svg';
const outClient: string = '/layout/out-client.svg';
const settings: string = '/layout/settings.svg';
const userImage: string = '/layout/user.png';

interface LayoutUserProps {
    children: JSX.Element;
    dataUser?: any;
    background?: boolean;
}

export const LayoutUser = observer(({ children, dataUser, background }: LayoutUserProps): JSX.Element => {
    const { network, contacts } = bd.menu;
    const router: NextRouter = useRouter();
    const token = [
        { url: '/user-master', token: 'masterToken' },
        { url: '/user-client', token: 'clientToken' },
    ].filter(item => item.url === router.asPath);

    const logOut = () => {
        deleteCookie(token[0].token);
        router.push('/');
    };

    return (
        <div className={css.page}>
            <header className={css.header}>
                <nav className={css.nav}>
                    <Link href={'/'}>
                        <a className={css.logo}>
                            <Image src={Logo} layout={'fill'} priority />
                        </a>
                    </Link>
                    <div className={css.item}>
                        {/*TODO данные с сервера пока заглушка*/}
                        <Image src={userImage} width={50} height={50} alt={'user'} priority />
                        <div>юлия соловьева</div>
                    </div>
                    <div
                        className={css.item}
                        style={{ cursor: 'pointer' }}
                        onClick={() => menuClientStore.onIndexMenu(3)}
                    >
                        <Image src={settings} width={19} height={19} alt={'setting'} priority />
                        <div>Настройки аккаунта</div>
                    </div>
                </nav>
                <div className={css.item} style={{ cursor: 'pointer' }} onClick={logOut}>
                    <Image src={outClient} width={18} height={18} alt={'out-client'} priority />
                    <div>Выйти из кабинета</div>
                </div>
            </header>
            <main className={css.main}>{children}</main>
            <footer className={css.footer}>
                <div className={css.footerNav}>
                    <Link href={'/'}>
                        <a className={css.logo}>
                            <Image src={Logo} layout={'fill'} priority />
                        </a>
                    </Link>
                    <div className={css.navBlockLeft}>
                        <div className={css.contactsBlock}>
                            <div>{contacts.phone}</div>
                            <div>{contacts.mail}</div>
                        </div>
                        <div className={css.networkContainer}>
                            {network.map(({ footer, header, url, alt }, i) => {
                                return (
                                    <Image
                                        key={i}
                                        src={url}
                                        width={footer.width}
                                        height={footer.height}
                                        alt={alt}
                                        priority
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={css.containerBottomBlock}>
                    <FooterBottomBlock />
                </div>
            </footer>
        </div>
    );
});
