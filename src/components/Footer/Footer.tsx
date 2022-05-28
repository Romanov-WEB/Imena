import React, { Fragment, useRef } from 'react';
import css from './Footer.module.scss';
import Image from 'next/image';
import data from '../../data/data.json';
import Link from 'next/link';
import FooterBottomBlock from '@components/FooterBottomBlock';

const imageUrlHeader: string = '/image/Footer/';

export function Footer(): JSX.Element {
    const { contacts, network, loginOut } = data.menu;

    return (
        <footer className={css.footer}>
            <div className='content'>
                <div className={css.footerTopBlock}>
                    <div className={css.logoBlock}>
                        <div className={css.header}>
                            Свяжитесь
                            <br /> с нами
                        </div>
                        <div className={css.logoDescription}>
                            Мы будем рады проконсультировать вас по вопросам обслуживания или открытия студии в
                            коворкинге.
                        </div>
                    </div>
                    <div className={css.blockForm}>
                        <FormFooter />
                    </div>
                </div>
                <div className={css.footerMidBlock}>
                    <div>
                        <Link href={'/'}>
                            <a>
                                <Image
                                    style={{ cursor: 'pointer' }}
                                    src={imageUrlHeader + 'logo.svg'}
                                    width={198}
                                    height={46}
                                    priority
                                    alt='logo'
                                />
                            </a>
                        </Link>
                        <a className={css.linkPhone} href={`tel:${contacts.phone}`}>
                            {contacts.phone}
                        </a>
                        <a className={css.linkEmail} href={`mailto:${contacts.mail}`}>
                            {contacts.mail}
                        </a>
                        <div className={css.network}>
                            {network.map((link, index) => {
                                return (
                                    <Link href={'/'} key={index}>
                                        <a>
                                            <Image
                                                src={link.url}
                                                width={link.footer.width}
                                                height={link.footer.height}
                                                priority
                                                alt={link.alt}
                                            />
                                        </a>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className={css.midBlockLeft}>
                        <div className={css.navigatorFooter}>
                            <Link href={'/'}>
                                <a>Главная</a>
                            </Link>
                            <div>Коворкинги</div>
                            <div>Обучение</div>
                            <div>Блог</div>
                            <div>Франшиза</div>
                            <div>ОПЛАТА</div>
                            <div>Контакты</div>
                        </div>
                        <div className={css.headerMidBlock}>
                            <h2>О нас</h2>
                            <ul>
                                <li>Наши студии</li>
                                <li>Клиентам</li>
                                <li>Владельцам помещений</li>
                                <li>Инвесторам</li>
                            </ul>
                        </div>
                        <div className={css.menuNavigator}>
                            {loginOut.map((link, index) => {
                                if (index === loginOut.length - 1) {
                                    return <Fragment key={index} />;
                                }
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
                <FooterBottomBlock />
            </div>
        </footer>
    );
}

function FormFooter(): JSX.Element {
    const form = useRef<HTMLFormElement | null>(null);

    const onSubmitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form.current!));
        form.current!.reset();
        console.log(data);
    };
    return (
        <>
            <form ref={form} id={'data'}>
                <label className={css.label}>
                    Ваше имя *
                    <input className={css.inputName} type='text' name='name' form={'data'} />
                </label>
                <label className={css.label}>
                    Ваш email *
                    <input className={css.inputEmail} type='email' name='email' form={'data'} />
                </label>
                <label className={css.labelDescription}>
                    Напишите ваш вопрос здесь *
                    <input className={css.inputDescription} type='text' name='description' form={'data'} />
                </label>
            </form>
            <div className={css.blockSubmitForm}>
                <p>
                    Нажимая на кнопку, вы даете <a className={css.link}>согласие</a> на обработку персональных данных и
                    соглашаетесь с политикой конфиденциальности.
                </p>
                <button className={css.btnSubmit} onClick={e => onSubmitForm(e)}>
                    отправить
                </button>
            </div>
        </>
    );
}
