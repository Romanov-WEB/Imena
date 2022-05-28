import React from 'react';
import css from './FooterLogin.module.scss';
import Image from 'next/image';
import data from '../../data/data.json';
import Link from 'next/link';
import FooterBottomBlock from '@components/FooterBottomBlock';

const imageUrlHeader: string = '/image/Footer/';

export function FooterLogin() {
    const { contacts, network } = data.menu;
    return (
        <footer className={css.footer}>
            <nav className={css.content}>
                <div className={css.blockNav}>
                    <Link href={'/login/user-master'}>
                        <a className={css.imageLogoPro}>
                            <Image src={'/image/header/logoHeaderPro.svg'} layout={'fill'} priority alt={''} />
                        </a>
                    </Link>
                    <div className={css.wrapperNetwork}>
                        <div className={css.wrapperContact}>
                            <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
                            <a href={`mailto:${contacts.mail}`}>{contacts.mail}</a>
                        </div>
                        <div>
                            {network.map((item, i) => {
                                return (
                                    <Link href={'/'} key={i}>
                                        <a className={css.networkLink}>
                                            <Image
                                                src={item.url}
                                                width={item.footer.width}
                                                height={item.footer.height}
                                                priority
                                                alt={item.alt}
                                            />
                                        </a>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <FooterBottomBlock />
            </nav>
        </footer>
    );
}
