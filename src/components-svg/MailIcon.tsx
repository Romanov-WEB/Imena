import * as React from 'react';
import { SVGProps } from 'react';

export const MailIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width='1em' height='1em' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            d='M13 3 7 7 1 3m1.2-2h9.6c.66 0 1.2.563 1.2 1.25v7.5c0 .688-.54 1.25-1.2 1.25H2.2C1.54 11 1 10.437 1 9.75v-7.5C1 1.562 1.54 1 2.2 1Z'
            stroke='#93A0B9'
            strokeWidth={1.6}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
