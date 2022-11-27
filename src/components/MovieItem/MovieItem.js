import classNames from 'classnames/bind';
import styles from './MovieItem.module.scss';

import apiConfig from '~/api/apiConfig';
import { Link } from 'react-router-dom';
import Button from '../Button';
const cx = classNames.bind(styles);

function MovieItem({ data, category }) {
    const srcImages = apiConfig.w500Image(data.poster_path || data.backdrop_path);

    return (
        <Link to={`/${category}/${data.id}`}>
            <div className={cx('wrapper')}>
                <div className={cx('movie-item')} style={{ backgroundImage: `url(${srcImages})` }}>
                    <Button className={cx('custom-center')} main>
                        <i className="bx bx-play"></i>
                    </Button>
                </div>
                <h3 className={cx('title')}>{data.title || data.name}</h3>
            </div>
        </Link>
    );
}

export default MovieItem;
