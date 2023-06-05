import * as React from 'react';
import { SVGProps } from 'react';

export const AddressIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width='1em' height='1em' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            d='M11.15 6.154c0 2.47-1.348 4.739-2.798 6.45A18.923 18.923 0 0 1 6 14.921a18.923 18.923 0 0 1-2.352-2.317C2.198 10.893.85 8.624.85 6.154.85 3.204 3.176.85 6 .85c2.824 0 5.15 2.354 5.15 5.304Z'
            stroke='#93A0B9'
            strokeWidth={1.7}
        />
        <circle cx={6} cy={6} r={2.2} stroke='#93A0B9' strokeWidth={1.6} />
    </svg>
);
