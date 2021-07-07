import { useState } from 'react';
import styles from '../styles/Articles.module.scss';
import { Modal } from 'react-bootstrap'

const ArticleModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <a className={`button transparent`} onClick={handleShow}>Read More</a>

            <Modal show={show} onHide={handleClose}>
                <button onClick={handleClose}>Close</button>
                <h2>Content Goes here</h2>
            </Modal>
        </div>
    )
}

export default ArticleModal;