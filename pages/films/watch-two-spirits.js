import FilmPage from "../../component/FilmPage";
import TwoSpirits from '../../public/img/two-spirits.jpeg';

const WatchTwoSpirits = ({twoSpirits}) => {
    return(
        <>
            <FilmPage film="Two Spirits" image={TwoSpirits} filmID={twoSpirits.acf.video_id} />
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://cms.sayyesquickly.net/wp-json/wp/v2/film/227')
    const twoSpirits = await res.json();

    return {
        props: {
            twoSpirits
        },
        revalidate: 10
    }
}

export default WatchTwoSpirits;