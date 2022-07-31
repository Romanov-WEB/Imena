import React from 'react';
import { useRouter } from 'next/router';
import Nav from '../Nav';
import NavLogin from '../NavLogin';
import Footer from '../Footer';
import FooterLogin from '../FooterLogin';

import css from './style.module.scss';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
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
