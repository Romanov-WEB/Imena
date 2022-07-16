import React from 'react';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import { useRouter } from 'next/router';
import NavLogin from '../nav/NavLogin';
import FooterLogin from '../footer/FooterLogin';
import css from './Layout.module.scss';

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
