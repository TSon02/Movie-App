import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '~/api/tmdbApi';

import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import apiConfig from '~/api/apiConfig';
import ListCast from './ListCast';
import TrailerList from './TrailerList';
import MovieList from '~/components/MovieList';
const cx = classNames.bind(styles);

const Detail = () => {
    const { id, category } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        async function getDetail() {
            let respone = await tmdbApi.detail(category, id, { params: {} });
            window.scrollTo(0, 0);

            setItem(respone);
        }
        getDetail();
    }, [category, id]);
    return (
        <>
            <div
                className={cx('banner')}
                style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})` }}
            ></div>

            <div className={cx('content', 'mb-3', 'container')}>
                <div className={cx('poster')}>
                    <div
                        className={cx('poster__img')}
                        style={{
                            backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`,
                        }}
                    ></div>
                </div>
                <div className={cx('content__info')}>
                    <h1 className={cx('title')}>{item.title || item.name}</h1>

                    <div className={cx('genres')}>
                        {item.genres &&
                            item.genres.map((data, index) => {
                                return (
                                    <span key={index} className={cx('genres__item')}>
                                        {data.name}
                                    </span>
                                );
                            })}
                    </div>

                    <div className={cx('overview')}>{item.overview}</div>
                    <div className={cx('credit')}>
                        <h2>Casts</h2>
                        <ListCast cate={category} id={id}></ListCast>
                    </div>
                </div>
            </div>

            <div className={cx('container')}>
                <div className={cx('section')}>
                    <TrailerList></TrailerList>
                    <div className={cx('similar')}>
                        <h2>Similar</h2>
                        <MovieList cate={category} id={id} type="similar" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;
