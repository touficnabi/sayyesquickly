import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import Layout from '../component/Layout';
import Router from 'next/router'
import { useEffect, useRef } from 'react';
import Loader from '../component/Loader';

gsap.registerPlugin(ScrollTrigger)

function MyApp({ Component, pageProps }) {
    
    const load = useRef(null)

    useEffect(() => {
        gsap.to(load.current, {
            alpha: 0, 
            display: "none",
            duration: .5
        })
        Router.events.on('routeChangeStart', (url) => {
            gsap.to(load.current, {
                alpha: 1, 
                display: "block",
                duration: .5
            })
        })
        Router.events.on('routeChangeComplete', (url) => {
            gsap.to(load.current, {
                alpha: 0, 
                display: "none",
                duration: .5
            })
        })
    }, [])

    return(
        <>
            <div className="loading" ref={load}><Loader color="#e94b35" size={100} /></div>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
