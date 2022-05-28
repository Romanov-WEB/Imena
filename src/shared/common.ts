export function loadImage(src: string): Promise<unknown> {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', resolve);
        image.addEventListener('error', reject);
        image.src = src;
    });
}

export function getCookie(name: string): any {
    try {
        let matches = document.cookie.match(
            new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
    } catch (e) {
        console.log(e);
    }
}

interface OptionsCookies {
    domain?: string;
    expires?: Date | string;
    httpOnly?: boolean;
    'max-age'?: number;
    path?: string;
    samesite?: boolean | 'lax' | 'strict' | 'none';
    secure?: boolean;

    encode?(val: string): string;
}

export function setCookie(name: string, value: string, options: OptionsCookies = {}) {
    try {
        options = {
            path: '/',
            // при необходимости добавьте другие значения по умолчанию
            ...options,
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

        let optionKey: keyof OptionsCookies;
        for (optionKey in options) {
            updatedCookie += '; ' + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += '=' + optionValue;
            }
        }
        document.cookie = updatedCookie;
    } catch (e) {
        console.log(e);
    }
}

export function deleteCookie(name: string) {
    try {
        setCookie(name, '', {
            'max-age': -1,
        });
    } catch (e) {
        console.log(e);
    }
}
