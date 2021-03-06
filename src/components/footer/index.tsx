import React, { Fragment, useRef } from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import data from '../../data/data.json';
import Link from 'next/link';

const imageUrlHeader: string = '/image/footer/';

export default function Footer(): JSX.Element {
    const { contacts, network, loginOut } = data.menu;

    return (
        <footer className={style.footer}>
            <div className="content">
                <div className={style.footerTopBlock}>
                    <div className={style.logoBlock}>
                        <div className={style.header}>
                            Свяжитесь
                            <br /> с нами
                        </div>
                        <div className={style.logoDescription}>
                            Мы будем рады проконсультировать вас по вопросам обслуживания или открытия студии в
                            коворкинге.
                        </div>
                    </div>
                    <div className={style.blockForm}>
                        <FormFooter />
                    </div>
                </div>
                <div className={style.footerMidBlock}>
                    <div>
                        <Link href={'/'}>
                            <a>
                                <Image
                                    style={{ cursor: 'pointer' }}
                                    src={imageUrlHeader + 'logo.svg'}
                                    width={198}
                                    height={46}
                                    priority
                                    alt="logo"
                                />
                            </a>
                        </Link>
                        <a className={style.linkPhone} href={`tel:${contacts.phone}`}>
                            {contacts.phone}
                        </a>
                        <a className={style.linkEmail} href={`mailto:${contacts.mail}`}>
                            {contacts.mail}
                        </a>
                        <div className={style.network}>
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
                    <div className={style.midBlockLeft}>
                        <div className={style.navigatorFooter}>
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
                        <div className={style.headerMidBlock}>
                            <h2>О нас</h2>
                            <ul>
                                <li>Наши студии</li>
                                <li>Клиентам</li>
                                <li>Владельцам помещений</li>
                                <li>Инвесторам</li>
                            </ul>
                        </div>
                        <div className={style.menuNavigator}>
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
                <div className={style.footerBottomBlock}>
                    <div>© Imena Studios 2019 | Все права защищены</div>
                    <a>Политика конфиденциальности</a>
                    <Link href={'https://atman.pro/?utm_source=website&utm_medium=copyright&utm_campaign=imena'}>
                        <a target={'_blank'}>
                            <Image src={imageUrlHeader + 'atman-logo.svg'} width={77} height={29} alt={'atman'} />
                        </a>
                    </Link>
                </div>
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
                <label className={style.label}>
                    Ваше имя *
                    <input className={style.inputName} type="text" name="name" form={'data'} />
                </label>
                <label className={style.label}>
                    Ваш email *
                    <input className={style.inputEmail} type="email" name="email" form={'data'} />
                </label>
                <label className={style.labelDescription}>
                    Напишите ваш вопрос здесь *
                    <input className={style.inputDescription} type="text" name="description" form={'data'} />
                </label>
            </form>
            <div className={style.blockSubmitForm}>
                <p>
                    Нажимая на кнопку, вы даете <a className={style.link}>согласие</a> на обработку персональных данных
                    и соглашаетесь с политикой конфиденциальности.
                </p>
                <button className={style.btnSubmit} onClick={(e) => onSubmitForm(e)}>
                    отправить
                </button>
            </div>
        </>
    );
}
