import React from 'react';
import Image from 'next/image';
import css from './CardMaster.module.scss';
import Link from 'next/link';

import crossIcon from '@assets/CardMaster/cross.svg';
import phoneIcon from '@assets/CardMaster/phone.svg';
import mailIcon from '@assets/CardMaster/mail.svg';
import recordIcon from '@assets/CardMaster/record.svg';

interface CardMasterProps {
    name: string;
    phone: string;
    email: string;
}

export function CardMaster({ name, phone, email }: CardMasterProps): JSX.Element {
    return (
        <div className={css.cardMaster}>
            <button className={css.cardMaster__buttonDelete}>
                <Image src={crossIcon} width={11} height={11} />
            </button>
            <div className={css.cardMaster__wrapper}>
                <div className={css.wrapperHeader}>
                    <h2 className={css.wrapperHeader__header}>{name}</h2>

                    <span>/</span>

                    <h3 className={css.wrapperHeader__subHeader}>cтраница мастера</h3>
                </div>

                <div className={css.wrapperLink}>
                    <Link href={`tel:${phone}`}>
                        <a className={css.wrapperLink__link}>
                            <Image src={phoneIcon} width={30} height={12} />
                            {phone}
                        </a>
                    </Link>

                    <a href={`mailto: ${email}`} className={css.wrapperLink__link}>
                        <Image src={mailIcon} width={30} height={10} />
                        {email}
                    </a>
                </div>
            </div>
            <button className={css.cardMaster__buttonRecord}>
                <Image src={recordIcon} width={30} style={{ marginRight: '5px' }} height={15} priority />
                Записаться на услугу
            </button>
        </div>
    );
}
