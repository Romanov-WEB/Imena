import * as React from 'react';
import { SVGProps } from 'react';

export const PriceIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width='1em' height='1em' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='m4.02 7.685 1.52 1.55a1.067 1.067 0 0 1 1.522.001 1.106 1.106 0 0 1 0 1.55l1.52 1.551a1.067 1.067 0 0 0 1.522 0l5.58-5.68a1.106 1.106 0 0 0 0-1.55l-1.521-1.55a1.067 1.067 0 0 1-1.522 0 1.105 1.105 0 0 1 0-1.549L11.118.46a1.067 1.067 0 0 0-1.522 0l-5.58 5.68a1.105 1.105 0 0 0 .004 1.546Zm6.91-5.352a2.598 2.598 0 0 0 .696 2.258 2.49 2.49 0 0 0 2.218.708l.572.583-5.073 5.164-.57-.582a2.58 2.58 0 0 0-.695-2.259 2.49 2.49 0 0 0-2.218-.71l-.572-.584 5.07-5.16.572.582Z'
            fill='#93A0B9'
        />
        <path
            d='M6.793.214a.709.709 0 0 0-1.015 0L.21 5.882a.74.74 0 0 0 0 1.033l5.768 5.871a.709.709 0 0 0 1.015 0l1.8-1.832-.806-1.245-1.501 1.528-4.754-4.839 4.554-4.635 1.496 1.524 1.221-.823-2.21-2.25Z'
            fill='#93A0B9'
        />
    </svg>
);
