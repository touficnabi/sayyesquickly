import Nav from './Nav';
import Footer from "./Footer"
import { useEffect } from 'react';

const Layout = ({children}) => {
    useEffect((e) => {
        window.scrollTo(0, 2000);
    }, [])
    return (
        <div className="layout">
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;