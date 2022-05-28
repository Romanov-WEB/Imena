import React from 'react';
import style from './FooterBottomBlock.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const imageUrlHeader: string = '/image/Footer/';

export function FooterBottomBlock(): JSX.Element {
    return (
        <div className={style.footerBottomBlock}>
            <div>© Imena Studios 2019 | Все права защищены</div>
            <a>Политика конфиденциальности</a>
            <Link href={'https://atman.pro/?utm_source=website&utm_medium=copyright&utm_campaign=imena'}>
                <a target={'_blank'}>
                    <Image src={imageUrlHeader + 'atman-logo.svg'} width={77} height={29} alt={'atman'} />
                </a>
            </Link>
        </div>
    );
}
