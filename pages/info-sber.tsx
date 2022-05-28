import React, { useMemo } from 'react';
import css from 'styles/InfoSber.module.scss';
import Layout from '@components/Layout';
import Head from 'next/head';
import Image from 'next/image';

export default function InfoSber(): JSX.Element {
    const imageIcons: string[] = useMemo(
        () => [
            '/image/info-sber/mir.svg',
            '/image/info-sber/visa.svg',
            '/image/info-sber/mastercard.svg',
            '/image/info-sber/jcb.svg',
        ],
        [],
    );
    return (
        <>
            <Head>
                <title>Оплата - Коворкинги</title>
            </Head>
            <Layout>
                <div className={css.container}>
                    <h1 className={css.headerPage}>ОПЛАТА</h1>
                    <div className={css.wrapperContent}>
                        <div className={css.content}>
                            <h2>КОНТАКТЫ</h2>
                            <ul>
                                <li>
                                    <span>Фактический адрес: </span>Москва, ул. Лобачевского, дом 118, корпус 4
                                </li>
                                <li>
                                    <span>Электронная почта: </span>
                                    <a>info@imenastudios.com</a>
                                </li>
                                <li>
                                    <span>Телефоны: </span> <a>+7 (495) 085-10-18</a>
                                </li>
                            </ul>
                        </div>
                        <div className={css.content}>
                            <h2>РЕКВИЗИТЫ КОВОРКИНГОВ</h2>
                            <ul>
                                <li>ООО «ЛОБАЧЕВСКИЙ-ХОЛЛ»</li>
                                <li>
                                    <span>ИНН / ОГРН </span>9715388532 / 1207700309959.
                                </li>
                                <li>
                                    <span>Юридический адрес: </span>127254, г.Москва, проезд Огородный, д.8, стр.1,
                                    комната 25
                                </li>
                                <li>
                                    <span>Телефоны: </span>
                                    +7 (495) 085-10-18
                                </li>
                            </ul>
                        </div>
                        <div className={css.content}>
                            <h2>СПОСОБЫ ОПЛАТЫ</h2>
                            <h3>Банковской картой</h3>
                            <p>
                                Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих
                                платёжных систем:
                            </p>
                            <div className={css.wrapperIcons}>
                                {imageIcons.map((image, index) => (
                                    <div className={css.imageIcon} key={index}>
                                        <Image src={image} layout={'fill'} priority alt={'image'} />
                                    </div>
                                ))}
                            </div>
                            <p>
                                Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО
                                СБЕРБАНК. Соединение с платёжным шлюзом и передача информации осуществляется в
                                защищённом режиме с использованием протокола шифрования SSL. В случае если Ваш банк
                                поддерживает технологию безопасного проведения интернет-платежей Verified By Visa,
                                MasterCard SecureCode, MIR Accept, J-Secure, для проведения платежа также может
                                потребоваться ввод специального пароля. Настоящий сайт поддерживает 256-битное
                                шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается ПАО
                                СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением
                                случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам
                                осуществляется в строгом соответствии с требованиями платёжных систем МИР, Visa Int.,
                                MasterCard Europe Sprl, JCB.
                            </p>
                            <h3>Возврат денежных средств</h3>
                            <p>
                                В случае расторжения договора возврат переведённых средств, производится на ваш
                                банковский счёт в течение 30 рабочих дней (срок зависит от банка, который выдал вашу
                                банковскую карту).
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
