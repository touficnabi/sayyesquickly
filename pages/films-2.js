import Head from 'next/head';
import Link from 'next/link';
import PageHero from '../component/PageHero';
import PortfolioItem from '../component/PortfolioItem';
import HeroImage from '../public/img/film-hero-img.jpeg';
import styles from '../styles/Books.module.scss'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const Films = ({films}) => {
    return(
        <main>
            <Head>
                <title>Films by Russell Martin</title>
            </Head>
            <PageHero text="Films" image={HeroImage} />
            <div className={styles.books}>

                {films.map((film, index) => index % 2 ==0 ? (
                    <PortfolioItem key={film.id} book image={film.image} name={film.acf.film_name}>
                        <h4>{film.acf.film_tagline}</h4>
                        <span dangerouslySetInnerHTML={{__html: film.content.rendered}}></span>
                        <div className="button_container" style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
                            <Link href={film.acf.view_url}><a className="button solid">{film.acf.view_button}</a></Link>
                            <Link href={film.acf.film_website_url}><a className="button transparent">{film.acf.film_website}</a></Link>
                        </div>
                    </PortfolioItem>
                ) : (
                    <PortfolioItem key={film.id} book image={film.image} name={film.acf.film_name} reversed>
                        <h4>{film.acf.film_tagline}</h4>
                        <span dangerouslySetInnerHTML={{__html: film.content.rendered}}></span>
                        <Link href={film.acf.view_url}><a className="button solid">{film.acf.view_button}</a></Link>
                        <Link href={film.acf.film_website_url}><a className="button solid">{film.acf.film_website}</a></Link>
                    </PortfolioItem>
                ))}
            </div>
        </main>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://cms.sayyesquickly.net/wp-json/wp/v2/film?_embed&filter[orderby]=date&order=asc')
    const items = await res.json();

    const films = items.map(film => {
        return {...film, image: {
            src: film.better_featured_image.source_url,
            height: film.better_featured_image.media_details.height,
            width: film.better_featured_image.media_details.width
        }}
    })

    return {
        props: {
            films
        }
    }
}

export default Films;