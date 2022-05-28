import React from 'react';
import css from './SettingInput.module.scss';

interface SettingInputProps {
    label: string;
    text: string;
    name?: string;
    password?: boolean;
}

export function SettingInput({ label, text, name, password = false }: SettingInputProps): JSX.Element {
    return (
        <label className={css.label}>
            <div>{label}</div>
            <input name={name} placeholder={text} type={password ? 'password' : 'text'} />
        </label>
    );
}
