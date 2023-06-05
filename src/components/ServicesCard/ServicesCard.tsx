import React from 'react';
import css from './ServicesCard.module.scss';
import Image from 'next/image';
import { PhoneIcon } from '@components-svg/PhoneIcon';
import { MailIcon } from '@components-svg/MailIcon';
import { HardIcon } from '@components-svg/HardIcon';
import { DeleteIcon } from '@components-svg/DeleteIcon';
import { PriceIcon } from '@components-svg/PriceIcon';
import { ClockIcon } from '@components-svg/ClockIcon';
import { StarIcon } from '@components-svg/StarIcon';
import { StarGoldIcon } from '@components-svg/StarGoldIcon';
import userIcon from '@assets/iconsUser/user.png';
import { AddressIcon } from '@components-svg/AddressIcon';

interface ServicesCardProps {
    status: boolean;
    topic: string;
    name: string;
    email: string;
    phone: string;
    price: string;
    data: string;
    address: string;
}

export const ServicesCard = ({
    status,
    address,
    data,
    price,
    topic,
    phone,
    name,
    email,
}: ServicesCardProps): JSX.Element => {
    const confirmed = <p className={css.confirmed}>Подтверждена мастером</p>;

    const passed = <div></div>;

    return (
        <div className={css.servicesCard}>
            <div className={css.wrapperContent}>
                <div className={css.header}>
                    <h2>{topic}</h2>

                    {confirmed}
                </div>

                <div className={css.infoMaster}>
                    <div className={css.infoMaster__name}>
                        <div className={css.userIcon}>
                            <Image src={userIcon} layout={'fill'} priority />
                        </div>

                        <div>
                            <h3>Мастер</h3>

                            <p>{name}</p>
                        </div>
                    </div>

                    <div className={css.infoMaster__network}>
                        <div>
                            <a>
                                <MailIcon className={css.mailIcon} />

                                <div>{email}</div>
                            </a>

                            <a>
                                <PhoneIcon className={css.phoneIcon} />

                                <div>{phone}</div>
                            </a>
                        </div>

                        <HardIcon className={css.hardIcon} />
                    </div>
                </div>

                <div className={css.recordContent}>
                    <div className={css.recordContent__info}>
                        <div>
                            <div>
                                <PriceIcon className={css.priceIcon} />

                                <div>стоимость</div>
                            </div>

                            <div className={css.text}>{price} ₽</div>
                        </div>

                        <div>
                            <div>
                                <ClockIcon className={css.clockIcon} />

                                <div>Дата</div>
                            </div>

                            <div className={css.text}>{data}</div>
                        </div>
                    </div>

                    <div className={css.recordContent__address}>
                        <div>
                            <AddressIcon className={css.addressIcon} />

                            <div>адрес</div>
                        </div>

                        <div className={css.text}>{address}</div>
                    </div>
                </div>
            </div>

            <button className={css.btn}>
                <DeleteIcon className={css.deleteIcon} />

                <div>Отозвать заявку</div>
            </button>
        </div>
    );
};
