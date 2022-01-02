import Head from 'next/head';
import Link from 'next/link';
import PageHero from '../component/PageHero';
import PortfolioItem from '../component/PortfolioItem';
import HeroImage from '../public/img/books-hero.jpeg';
import book1 from '../public/img/book1.jpeg';
import styles from '../styles/Books.module.scss'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const Books = ({bookImage}) => {
    console.log('book imFW', book1)
    console.log('books', bookImage)

    const fakeImg = {
        src: '/wp-content/uploads/2022/01/beethovens-hair.jpeg',
        height: 200,
        width: 320
    }
    return(
        <main>
            <Head>
                <title>Books by Russell Martin</title>
            </Head>
            <PageHero text="Books" image={HeroImage} />
            <div className={styles.books}>

                {bookImage.map((book, index) => index % 2 ==0 ? (
                    <PortfolioItem key={book.id} book image={book.image} name={book.acf.book_name}>
                        <h4>{book.acf.book_tagline}</h4>
                        <span dangerouslySetInnerHTML={{__html: book.content.rendered}}></span>
                        <Link href={book.acf.buy_url}><a className="button solid">{book.acf.buy_button}</a></Link>
                    </PortfolioItem>
                ) : (
                    <PortfolioItem key={book.id} book image={book.image} name={book.acf.book_name} reversed>
                        <h4>{book.acf.book_tagline}</h4>
                        <span dangerouslySetInnerHTML={{__html: book.content.rendered}}></span>
                        <Link href={book.acf.buy_url}><a className="button solid">{book.acf.buy_button}</a></Link>
                    </PortfolioItem>
                ))}
            </div>
        </main>
    )
}

export const getStaticProps = async () => {
    // const client = new ApolloClient({
    //     uri: 'http://cms.sayyesquickly.net/graphql',
    //     cache: new InMemoryCache()
    // })

    // const res = await client.query({
    //     query: gql`
    //         query MyQuery {
    //             books {
    //                 edges {
    //                     node {
    //                         id
    //                         bookId
    //                         content(format: RENDERED)
    //                         title
    //                         featuredImage {
    //                             node {
    //                                 id
    //                                 authorId
    //                                 altText
    //                                 sourceUrl(size: LARGE)
    //                                 srcSet
    //                                 uri
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     `
    // })

    // const books = res.data.books.edges.map(({node}) => node);

    const res = await fetch('https://cms.sayyesquickly.net/wp-json/wp/v2/book?_embed&filter[orderby]=date&order=asc')
    const books = await res.json();

    const bookImage = books.map(book => {
        return {...book, image: {
            src: book.better_featured_image.source_url,
            height: book.better_featured_image.media_details.height,
            width: book.better_featured_image.media_details.width
        }}
    })

    return {
        props: {
            bookImage
        }
    }
}

export default Books;