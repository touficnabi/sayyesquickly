import { useEffect, useState } from 'react';
import styles from '../styles/Articles.module.scss';
import { Modal } from 'react-bootstrap';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Link  from 'next/link';

const ArticleModal = ({image, title, content, author, date}) => {
     

    const postImage = {
        src: image.source_url,
        width: image.media_details.width,
        height: image.media_details.height
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <a className={`button transparent`} onClick={handleShow}>Read Article</a>

            <Modal show={show} onHide={handleClose} className={styles.modal}>
                <button className={styles.close} onClick={handleClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <div className={styles.article_image}>
                    <Image loading="eager" src={postImage} alt={title.rendered} />
                </div>
                <div className={styles.content}>
                    <h2 dangerouslySetInnerHTML={{__html: title.rendered}}></h2>
                    <p className={styles.article_meta}>
                        By <span><Link href="/russell-martin">{author}</Link></span> - <span>{new Date(date).toDateString()}</span>
                    </p>
                    <span className={styles.content_body} dangerouslySetInnerHTML={{__html: content.rendered}}></span>
                </div>
            </Modal>
        </div>
    )
}

export default ArticleModal;