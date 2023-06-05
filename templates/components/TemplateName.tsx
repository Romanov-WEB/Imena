import React from 'react';
import css from './TemplateName.module.scss';

interface TemplateNameProps {}

export function TemplateName({}: TemplateNameProps): JSX.Element {
    return <div className={css.templateName}></div>;
}
