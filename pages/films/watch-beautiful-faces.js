import FilmPage from "../../component/FilmPage";
import BeautifulFaces from '../../public/img/beautiful-faces-still-1.jpeg';

const WatchBeautifulFaces = ({film}) => {
    console.log(film.acf.video_id);
    return(
        <>
            <FilmPage film="Beautiful Faces" image={BeautifulFaces} filmID={film.acf.video_id} />
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://cms.sayyesquickly.net/wp-json/wp/v2/film/69?_embed&filter[orderby]=date&order=asc')
    const film = await res.json();

    return {
        props: {
            film
        },
        revalidate: 10
    }
}

export default WatchBeautifulFaces;