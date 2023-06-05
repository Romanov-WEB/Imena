import * as React from 'react';
import { SVGProps } from 'react';

export const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width='1em' height='1em' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0 2.766h7.8v1.6H1.6v11.4H11v-8.2h1.6v9.8H0v-14.6Z'
            fill='#ED6B6A'
        />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M11.669 3.566 9.234 1.13 10.366 0 12.8 2.434 15.234 0l1.132 1.131-2.435 2.435L16.366 6 15.234 7.13 12.8 4.697l-2.434 2.434L9.234 6l2.435-2.434Z'
            fill='#ED6B6A'
        />
    </svg>
);
