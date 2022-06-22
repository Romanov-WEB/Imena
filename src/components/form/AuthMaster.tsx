import React from 'react';
import css from "./AuthClient.module.scss";

export default function AuthMaster() {
    return (
        <form id={'form-auth-master'} className={css.form}>
            <input name={'phone'} className={css.input} placeholder={'Телефон *'}/>
            <input name={'password'} className={css.input} placeholder={'Пароль *'}/>
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
