import React from 'react';
import css from './FooterLogin.module.scss';
import Image from "next/image";
import data from '../../data/data.json';
import Link from "next/link";

const imageUrlHeader: string = "/image/footer/";

export default function FooterLogin() {
    const { contacts, network } = data.menu
    return (
        <footer className={css.footer}>
            <nav className={css.content}>
                <div className={css.blockNav}>
                    <Link href={'/login/master'}>
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
                                return(
                                    <Link href={'/'} key={i}>
                                        <a className={css.networkLink}>
                                            <Image src={item.url} width={item.footer.width} height={item.footer.height} priority alt={item.alt} />
                                        </a>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className={css.blockInfo}>
                    <div>© Imena PRO 2022 Все права защищены</div>
                    <div className={css.polit}>Политика конфиденциальности</div>
                    <Link href={'https://atman.pro/?utm_source=website&utm_medium=copyright&utm_campaign=imena'}>
                        <a target={'_blank'} style={{cursor: "pointer"}}>
                            <Image src={imageUrlHeader + 'atman-logo.svg'} width={77} height={29} alt={'atman'} />
                        </a>
                    </Link>
                </div>
            </nav>
        </footer>
    );
}
