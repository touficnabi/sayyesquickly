import { useState } from 'react';
import styles from '../styles/Articles.module.scss';
import { Modal } from 'react-bootstrap';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Link  from 'next/link';
// import ArticleImage from './public/article-image-2.jpeg'

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
                    {/* <Image src='/../public/img/article-image-2.jpeg' alt="sme" /> */}
                    <Image src={postImage} alt={title.rendered} />
                </div>
                <div className={styles.content}>
                    <h2 dangerouslySetInnerHTML={{__html: title.rendered}}></h2>
                    <p className={styles.article_meta}>
                        By <span><Link href="/russell-martin">{author}</Link></span> - <span>{new Date(date).toDateString()}</span>
                    </p>
                    <span className={styles.content_body} dangerouslySetInnerHTML={{__html: content.rendered}}></span>
                    {/* <p>
                        A CAVE CALLED Shanidar cuts into a limestone cliff that rises above the Zab River, a tributary of the Tigris in the foothills of far northern Iraq. Kurdish tribespeople live at Shanidar today, and it’s likely that the cave has been continuously populated by humans and their ancestors for 100,000 years. During his excavations at Shanidar in the 1960s, archaeologist Ralph Solecki encountered the remains of a Neanderthal male buried between two boulders near the cave&apos;s mouth. Solecki excavated the skeleton, removed it, and took samples of soil surrounding the spot where it lay. Sometime later, when the soil was examined for pollen content — a procedure that can lend valuable information about the season and climate at the time of a burial — something arresting emerged: Unlike typical soil samples, which include only a few grains of pollen broadcast by the wind, Solecki&apos;s samples contained enormous numbers of grains of yarrow, yellow groundsel, grape hyacinth, rose mallow, hollyhock, and blue bachelor&apos;s button — each of these species still flowering at Shanidar today as summer subsumes the spring.
                        <br/>
                        <br/>
                        Solecki concluded that the pollen could be accounted for only if it represented the remains of whole flowers rather than individual grains randomly borne by the breeze. And if blossoming flowers had been intentionally buried with the man&apos;s body, then these beings labeled Neanderthal had certainly become something more than apes. They were big-boned, massively muscled, and a prominent brow ridge jutted outward above their eyes, yet these distant ancestors of ours apparently already were capable of ritual and symbolic activity and therefore of some level of complex thought.
                    </p> */}
                </div>
            </Modal>
        </div>
    )
}

export default ArticleModal;