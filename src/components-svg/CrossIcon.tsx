import * as React from 'react';
import { SVGProps } from 'react';

export const CrossIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width='1em' height='1em' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path d='m1 1 11 11m0-11L1 12' stroke='#173343' strokeWidth={1.7} />
    </svg>
);
