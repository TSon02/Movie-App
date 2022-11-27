import styles from './CatalogHeader.module.scss';
import classNames from 'classnames/bind';

import bg from '~/assets/bg.jpg';

const cx = classNames.bind(styles);

function CatalogHeader({ children }) {
    return (
        <div className={cx('header')} style={{ backgroundImage: `url(${bg})` }}>
            <h2>{children}</h2>
        </div>
    );
}

export default CatalogHeader;
