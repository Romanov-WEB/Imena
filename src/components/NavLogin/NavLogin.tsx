import React from 'react';
import css from './NavLogin.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const imageUrlHeader: string = '/image/header/';

export function NavLogin(): JSX.Element {
    return (
        <nav className={css.wrapperNavLogin}>
            <div className={css.blockLogo}>
                <Link href={'/login/master'}>
                    <a className={css.imageLogoPro}>
                        <Image src={imageUrlHeader + 'logoHeaderPro.svg'} layout={'fill'} priority alt={''} />
                    </a>
                </Link>
            </div>

            <Link href={'/'}>
                <a className={css.wrapperOutLogin}>
                    <div className={css.imageOut}>
                        <Image src={imageUrlHeader + 'logOut.svg'} priority layout={'fill'} alt={''} />
                    </div>
                    <div className={css.textLoginLayout}>ВЕРНУТЬСЯ НА САЙТ</div>
                </a>
            </Link>
        </nav>
    );
}
