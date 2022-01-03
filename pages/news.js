import News from "../component/News"
import PageHero from "../component/PageHero";
import NewsHero from '../public/img/news-hero.jpeg';
import { Container, Row, Col } from "react-bootstrap";

const news = ({news}) => {
    return(
        <main>
            <PageHero text="News" image={NewsHero} />
            <section>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={7} md={12}>

                            {news.map(news => (
                                <News key={news.id} title={news.title.rendered}>
                                    {news.content.rendered}
                                </News>
                            ))}

                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export const getStaticProps = async () => {
    const query = await fetch('https://cms.sayyesquickly.net/wp-json/wp/v2/news?_embed&filter[orderby]=date&order=asc');
    const news = await query.json();

    return {
        props: {news}
    }
}

export default news;