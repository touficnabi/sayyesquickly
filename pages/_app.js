import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import Layout from '../component/Layout';
import Router from 'next/router'
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger)

function MyApp({ Component, pageProps }) {

    const [isLoading, setInLoading] = useState(false);
    const load = useRef(null)

    useEffect(() => {
        gsap.to(load.current, {
            alpha: 0, 
            display: "none",
            duration: .5
        })
        Router.events.on('routeChangeStart', (url) => {
            setInLoading(true);
            gsap.to(load.current, {
                alpha: 1, 
                display: "block",
                duration: .5
            })
        })
        Router.events.on('routeChangeComplete', (url) => {
            setInLoading(false)
            gsap.to(load.current, {
                alpha: 0, 
                display: "none",
                duration: .5
            })
        })
    }, [])

    return(
        <>
            <div className="loading" ref={load}></div>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
