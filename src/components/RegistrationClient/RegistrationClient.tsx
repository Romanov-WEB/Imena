import React, { useRef, useState } from 'react';
import css from '../AuthClient/AuthClient.module.scss';
import { emailExp, phoneExp } from '../../lib/RegExp';
import { registationClient } from '../../api/client';

type ValidInput = {
    name: boolean;
    family: boolean;
    phone: boolean;
    email: boolean;
    password: boolean;
};

export function RegistrationClient(): JSX.Element {
    const refForm = useRef<HTMLFormElement | null>(null);
    const refPassword = useRef<HTMLInputElement | null>(null);

    const [validInput, setValidInput] = useState<ValidInput>({
        name: false,
        family: false,
        phone: false,
        email: false,
        password: false,
    });

    const onSubmitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        let valid: boolean = false;
        const dataForm: { [p: string]: FormDataEntryValue } = Object.fromEntries(new FormData(refForm.current!));
        const { name, family, phone, email, password }: { [p: string]: FormDataEntryValue } = dataForm;

        validInput.name = typeof name === 'string' && Boolean(name.trim()) && name.length >= 2;
        validInput.family = typeof family === 'string' && Boolean(family.trim()) && family.length >= 3;
        validInput.phone = typeof phone === 'string' && phoneExp.test(phone);
        validInput.email = typeof email === 'string' && emailExp.test(email);
        validInput.password =
            refPassword.current?.value === password && Boolean(password.trim()) && password.length > 6;

        for (const nameElement in validInput) {
            if (validInput[nameElement as keyof ValidInput]) {
                return setValidInput({ ...validInput });
            } else {
                valid = true;
            }
        }
        if (valid) {
            registationClient('client/registation', dataForm);
        }
    };

    return (
        <form ref={refForm} id={'registration-user-client'} className={css.form}>
            <input
                name={'name'}
                type={'text'}
                className={validInput.name ? css.input : css.noValidInput}
                placeholder={'Имя *'}
            />
            <input
                name={'family'}
                type={'text'}
                className={validInput.family ? css.input : css.noValidInput}
                placeholder={'Фамилия *'}
            />
            <input
                name={'phone'}
                type={'number'}
                className={validInput.phone ? css.input : css.noValidInput}
                placeholder={'Телефон *'}
            />
            <input
                name={'email'}
                type={'email'}
                className={validInput.email ? css.input : css.noValidInput}
                placeholder={'Email'}
            />
            <input
                ref={refPassword}
                name={'password'}
                type={'password'}
                className={validInput.password ? css.input : css.noValidInput}
                placeholder={'Пароль *'}
            />
            <input
                name={'password'}
                type={'password'}
                className={validInput.password ? css.input : css.noValidInput}
                placeholder={'Пароль еще раз *'}
            />
            <div className={css.wrapperChecked}>
                <label className={css.label}>
                    <input type={'checkbox'} className={css.checked} />
                    ЗАПОМНИТЬ МЕНЯ
                </label>
                <a>Забыли пароль?</a>
            </div>
            <button onClick={e => onSubmitForm(e)} className={css.btn}>
                ВОЙТИ
            </button>
        </form>
    );
}
