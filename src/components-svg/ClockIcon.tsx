import * as React from 'react';
import { SVGProps } from 'react';

export const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width='1em' height='1em' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M7 12.444A5.444 5.444 0 1 0 7 1.556a5.444 5.444 0 0 0 0 10.888ZM7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z'
            fill='#93A0B9'
        />
        <path d='M5.444 3.889H7v4.667H5.444V3.889Z' fill='#93A0B9' />
        <path d='M10.111 7v1.556H5.444V7h4.667Z' fill='#93A0B9' />
    </svg>
);
