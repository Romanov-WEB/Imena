import React from 'react';
import css from './AuthClient.module.scss';
import { setCookie } from '../../shared/common';
import { useRouter } from 'next/router';

export function AuthClient(): JSX.Element {
    const router = useRouter();
    const login = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        // TODO токен переменная для функции проверки пароля (api-client)
        const token = '777';
        let date: Date = new Date(Date.now() / 1000 + 60 * 60 * 24 * 30);
        setCookie('clientToken', token, {
            expires: date,
            'max-age': +date,
            samesite: 'strict',
        });
        router.push('/user-client');
    };
    return (
        <form id={'form-auth-user-client'} className={css.form}>
            <input name={'phone'} className={css.input} placeholder={'Телефон *'} />
            <input name={'password'} className={css.input} placeholder={'Пароль *'} />
            <div className={css.wrapperChecked}>
                <label className={css.label}>
                    <input type={'checkbox'} className={css.checked} />
                    ЗАПОМНИТЬ МЕНЯ
                </label>
                <a>Забыли пароль?</a>
            </div>
            <button onClick={e => login(e)} className={css.btn}>
                ВОЙТИ
            </button>
        </form>
    );
}
