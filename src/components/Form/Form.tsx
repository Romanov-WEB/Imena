import React from 'react';
import css from './Form.module.scss';

interface PropsForm {
    idForm: string;
    children: JSX.Element;
}

export function Form({ idForm, children }: PropsForm) {
    return (
        <div className={css.containerForm}>
            <form id={idForm} className={css.form}>
                {children}
                <label className={css.description}>
                    Нажимая на кнопку “Отправить”, вы даете <span> согласие </span> на обработку персональных данных и
                    соглашаетесь с политикой конфиденциальности.
                </label>
            </form>
            <button className={css.btnForm}>Отправить</button>
        </div>
    );
}
