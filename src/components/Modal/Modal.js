import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Modal({ children, active, id, onClose }) {
    const modalRef = useRef(null);
    function closeModal() {
        modalRef.current.parentNode.classList.remove(cx('active'));
        if (onClose) {
            onClose();
        }
    }

    return (
        <div id={cx('modal_' + id)} className={cx('modal', active ? 'active' : '')} onClick={closeModal}>
            <div className={cx('modalContainer')} ref={modalRef}>
                {children}
                <div className={cx('modal-close')} onClick={closeModal}>
                    <i className="bx bx-x"></i>
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
    id: PropTypes.number.isRequired,
    onClose: PropTypes.func,
};

export default Modal;
