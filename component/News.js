import styles from '../styles/News.module.scss';

const News = ({title, children}) => {

    return(
        <div className={styles.news_item}>
            <h3 className={styles.news_title} dangerouslySetInnerHTML={{__html: title}}></h3>
            <div className={styles.news_description} dangerouslySetInnerHTML={{__html: children}}></div>
        </div>
    )
}

export default News;