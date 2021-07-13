import styles from '../styles/News.module.scss';

const News = ({title, description, link, url}) => {

    const newsExternalLink = link ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${link}</a>` : ''

    return(
        <div className={styles.news_item}>
            <h3 className={styles.news_title}>{title}</h3>
            <p className={styles.news_description}>{description} <span className={styles.news_external_link} dangerouslySetInnerHTML={{__html: newsExternalLink}}></span></p>
        </div>
    )
}

export default News;