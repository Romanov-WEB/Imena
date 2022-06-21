import React from 'react';
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import {useRouter} from "next/router";
import NavLogin from "../nav/NavLogin";
import FooterLogin from "../footer/FooterLogin";

interface LayoutProps {
    children: React.ReactNode
}
export default  function Layout ({children}:LayoutProps): JSX.Element {
    const router = useRouter()
    const toggleContent: boolean =  ['/login/client', '/login/master'].includes(router.asPath);

    return (
        <>
            <header>
                {!toggleContent? <Nav />: <NavLogin />}
            </header>
            { children }
            {!toggleContent? <Footer />: <FooterLogin />}
        </>
    );
}
