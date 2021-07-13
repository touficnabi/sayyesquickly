import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import Layout from '../component/Layout';

gsap.registerPlugin(ScrollTrigger)

function MyApp({ Component, pageProps }) {
    return( 
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
