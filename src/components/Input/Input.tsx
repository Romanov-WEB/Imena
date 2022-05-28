import React from 'react';

interface InputProps {
    text?: string;
    name: string;
    classNames: string;
    classText: string;
    placeholder?: string;
}

export function Input({ text, name, classNames, classText, placeholder }: InputProps) {
    return (
        <label className={classNames}>
            <input type='text' required />
            <div className={classText}>{text}</div>
        </label>
    );
}
