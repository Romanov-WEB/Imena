import React from 'react';
import Image from 'next/image';
import style from './Nav.module.scss';
import data from '../../data/data.json';
import Link from 'next/link';

export function Nav(): JSX.Element {
    const { contacts, network, loginOut, navigator } = data.menu;
    const imageUrlHeader: string = '/image/header/';

    return (
        <nav className={style.menu}>
            <div className={style.topMenu}>
                <div className={style.menuContact}>
                    <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
                    <a href={`mailto:${contacts.mail}`}>{contacts.mail}</a>
                </div>
                <div className={style.wrapperMenuRight}>
                    <div className={style.network}>
                        {network.map((link, index) => {
                            return (
                                <a key={index}>
                                    <Image
                                        src={link.url}
                                        width={link.header.width}
                                        height={link.header.height}
                                        priority
                                        alt={link.alt}
                                    />
                                </a>
                            );
                        })}
                    </div>
                    <div className={style.menuNavigator}>
                        {loginOut.map((link, index) => {
                            return (
                                <Link href={link.link} key={index}>
                                    <a>
                                        <div>
                                            <Image
                                                src={link.image.url}
                                                width={link.image.width}
                                                height={link.image.height}
                                                priority
                                                alt={link.image.alt}
                                            />
                                        </div>
                                        <div>{link.text}</div>
                                    </a>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={style.bottomMenu}>
                <Link href={'/'}>
                    <a className={style.logoImg}>
                        <Image src={imageUrlHeader + 'logo.svg'} width={198} height={46} priority alt='logo' />
                    </a>
                </Link>
                <div className={style.wrapperMidBtn}>
                    {navigator.map((link, index) => {
                        return link.image ? (
                            <Link href={link.link} key={index}>
                                <a className={style.midLinkIcon}>
                                    <div>{link.text}</div>
                                    <div className={style.imageArrow}>
                                        <Image
                                            src={link.image.url}
                                            width={link.image.width}
                                            height={link.image.height}
                                            priority
                                            alt={link.image.alt}
                                        />
                                    </div>
                                </a>
                            </Link>
                        ) : (
                            <Link href={link.link} key={index}>
                                <a key={index} className={style.midLink}>
                                    <div>{link.text}</div>
                                </a>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
