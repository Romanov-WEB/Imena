import React from 'react';
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
interface LayoutProps {
    children: React.ReactNode
}
export default  function Layout ({children}:LayoutProps): JSX.Element {
    return (
        <>
            <header>
                <Nav />
            </header>
            { children }
            <Footer />
        </>
    );
}
