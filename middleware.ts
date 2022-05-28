import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest, response: NextResponse) {
    const { cookies } = request;
    response = NextResponse.next();
    // TODO куки заглушка авторизации в качестве проверки редиректа
    //редиректы страниц
    if (cookies.get('clientToken') === '999' && request.url.includes('login/client')) {
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

    // test
    // response.cookies.set('test', '555', {
    //     expires: new Date(),
    //     maxAge: 300,
    // });

    return response;
}

export const config = {
    matcher: ['/login/client/:path*', '/login/master/:path*', '/user-client/:path*', '/user-master/:path*'],
};
