import React from 'react';
import css from './CardMaster.module.scss';
import Link from 'next/link';
import {CrossIcon} from "@components-svg/CrossIcon";
import {PhoneIcon} from "@components-svg/PhoneIcon";
import {MailIcon} from "@components-svg/MailIcon";
import {RecordIcon} from "@components-svg/RecordIcon";

interface CardMasterProps {
    name: string;
    phone: string;
    email: string;
}

export function CardMaster({ name, phone, email }: CardMasterProps): JSX.Element {
    return (
        <div className={css.cardMaster}>
            <button className={css.cardMaster__buttonDelete}>
                <CrossIcon className={css.crossIcon} />
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
                            <PhoneIcon className={css.phoneIcon} />
                            {phone}
                        </a>
                    </Link>

                    <a href={`mailto: ${email}`} className={css.wrapperLink__link}>
                        <MailIcon className={css.mailIcon} />
                        {email}
                    </a>
                </div>
            </div>
            <button className={css.cardMaster__buttonRecord}>
                <RecordIcon className={css.recordIcon} />
                Записаться на услугу
            </button>
        </div>
    );
}
