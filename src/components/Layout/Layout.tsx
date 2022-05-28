import React from 'react';
import { useRouter } from 'next/router';
import Nav from '@components/Nav';
import NavLogin from '@components/NavLogin';
import Footer from '@components/Footer';
import FooterLogin from '@components/FooterLogin';
import css from './Layout.module.scss';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
    const router = useRouter();
    const toggleContent: boolean = ['/login/client', '/login/master'].includes(router.asPath);

    return (
        <div className={css.main}>
            <header>{!toggleContent ? <Nav /> : <NavLogin />}</header>
            <main>{children}</main>
            {!toggleContent ? <Footer /> : <FooterLogin />}
        </div>
    );
}
