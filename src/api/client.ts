import { urlStatic } from '../lib/variable';

export const registationClient = async (url: string, body: any): Promise<void> => {
    try {
        const response = await fetch(`${urlStatic}${url}`, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        if (response.ok) {
            console.log('ok');
        } else {
            console.log('no');
        }
    } catch (e) {
        console.log(e);
    }
};
