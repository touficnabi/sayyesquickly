import styles from '../styles/News.module.scss';

const News = ({title, children}) => {

    return(
        <div className={styles.news_item}>
            <h3 className={styles.news_title}>{title}</h3>
            <p className={styles.news_description}>{children}</p>
        </div>
    )
}

export default News;