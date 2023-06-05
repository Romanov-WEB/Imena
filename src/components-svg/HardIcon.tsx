import * as React from 'react';
import { SVGProps } from 'react';

export const HardIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width='1em' height='1em' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            d='M29.027 19.976v-.001a3.277 3.277 0 0 0-1.043-.715h-.002a3.169 3.169 0 0 0-1.261-.26h-.003a3.225 3.225 0 0 0-2.074.758l-.643.541-.644-.54a3.215 3.215 0 0 0-3.338-.499h-.001a3.267 3.267 0 0 0-1.043.715l-.002.001c-.3.304-.541.668-.71 1.072l10.764-1.072Zm0 0c.3.304.542.668.71 1.072m-.71-1.072.71 1.072m0 0c.175.42.264.865.263 1.325v.003c0 .427-.084.893-.267 1.389l-.001.002c-.151.413-.379.86-.682 1.33-.479.74-1.155 1.537-2.021 2.366l2.709-6.415Zm-8.766 6.416a23.729 23.729 0 0 0 2.9 2.352l.003.001.008.005.008.006.11.073.11-.073a23.726 23.726 0 0 0 2.919-2.364H20.97Zm0 0c-.866-.83-1.542-1.627-2.021-2.367l2.021 2.366ZM18 22.375c0-.462.09-.908.264-1.328l.003 2.716A4.018 4.018 0 0 1 18 22.376Zm.95 2.72a6.873 6.873 0 0 1-.683-1.331l.683 1.331Z'
            stroke='#ED6B6A'
            strokeWidth={2}
        />
        <circle cx={24} cy={24} r={23.5} stroke='#FFDCDC' />
    </svg>
);
