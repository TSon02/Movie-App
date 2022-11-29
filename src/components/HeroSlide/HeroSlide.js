import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './HeroSlide.module.scss';

import tmdbApi, { movieType } from '~/api/tmdbApi';
import HeroSlideItem from '../HeroSlideItem';
import Modal from '../Modal/Modal';

const cx = classNames.bind(styles);

function HeroSlide() {
    SwiperCore.use([Autoplay]);

    const [movieItems, setMovieItems] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 2 };
            try {
                const data = await tmdbApi.getMoviesList(movieType.popular, { params });
                setMovieItems(data.results.slice(0, 4));
            } catch (error) {
                console.log(error);
            }
        };

        getMovies();
    }, []);

    return (
        <div className={cx('slider')}>
            <Swiper
                className={cx('abc')}
                modules={[Autoplay]}
                slidesPerView={1}
                grabCursor={true}
                spaceBetween={0}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
                {movieItems.map((movieItem, index) => {
                    return (
                        <SwiperSlide key={index}>
                            {({ isActive }) => {
                                return <HeroSlideItem item={movieItem} className={isActive ? cx('active') : ''} />;
                            }}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {movieItems.map((movieItem, index) => {
                return <TrailerModal key={index} movieItem={movieItem} index={index}></TrailerModal>;
            })}
        </div>
    );
}

function TrailerModal(movieItem, index) {
    const iframeRef = useRef(null);
    function onClose() {
        iframeRef.current.setAttribute('src', '');
    }
    return (
        <Modal key={index} active={false} id={movieItem.movieItem.id} onClose={onClose}>
            <iframe width="100%" height="500px" title="trailer" ref={iframeRef}></iframe>
        </Modal>
    );
}

export default HeroSlide;
