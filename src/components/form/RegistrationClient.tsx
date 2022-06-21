import React from 'react';
import css from './AuthClient.module.scss'

export default function RegistrationClient() {
    return (
        <form className={css.form}>
            <input name={'name'} className={css.input} placeholder={'Имя *'}/>
            <input name={'family'} className={css.input} placeholder={'Фамилия *'}/>
            <input name={'phone'} className={css.input} placeholder={'Телефон *'}/>
            <input name={'email'} className={css.input} placeholder={'Email'}/>
            <input name={'password'} className={css.input} placeholder={'Пароль *'}/>
            <input name={'password'} className={css.input} placeholder={'Пароль еще раз *'}/>
            <div className={css.wrapperChecked}>
                <label className={css.label}>
                    <input type={'checkbox'} className={css.checked}/>
                    ЗАПОМНИТЬ МЕНЯ
                </label>
                <a>Забыли пароль?</a>
            </div>
            <button className={css.btn}>ВОЙТИ</button>
        </form>
    );
}
