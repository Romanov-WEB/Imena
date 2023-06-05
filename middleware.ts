import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from './server/actions/getToken/getToken';

export async function middleware(request: NextRequest, response: NextResponse) {
    const { cookies } = request;
    response = NextResponse.next();
    //редиректы страниц

    if ((await getToken(cookies.get('clientToken'))) && request.url.includes('login/client')) {
        return NextResponse.redirect(new URL('/user-client', request.url));
    }
    if (cookies.get('clientToken') === undefined && request.url.includes('user-client')) {
        return NextResponse.redirect(new URL('/login/client', request.url));
    }
    if (cookies.get('masterToken') === '666' && request.url.includes('login/master')) {
        return NextResponse.redirect(new URL('/user-master', request.url));
    }
    if (cookies.get('masterToken') === undefined && request.url.includes('user-master')) {
        return NextResponse.redirect(new URL('/login/master', request.url));
    }


    return response;
}

export const config = {
    matcher: ['/login/client/:path*', '/login/master/:path*', '/user-client/:path*', '/user-master/:path*'],
};
