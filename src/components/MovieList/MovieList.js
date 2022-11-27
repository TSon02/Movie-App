import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import './MovieList.scss';
import tmdbApi, { category } from '~/api/tmdbApi';

import MovieItem from '../MovieItem';
function MovieList({ cate, type, id }) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getList = async () => {
            let response = null;

            if (type !== 'similar') {
                switch (cate) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(type, { params: {} });
                        break;

                    default:
                        response = await tmdbApi.getTvList(type, { params: {} });
                }
            } else {
                response = await tmdbApi.similar(cate, id);
            }

            setItems(response.results);
        };

        getList();
    }, [cate, id, type]);

    return (
        <div className="slide-wrapper">
            <Swiper slidesPerView={'auto'} grabCursor={true} spaceBetween={10}>
                {items.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <MovieItem data={item} category={cate} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

MovieList.propTypes = {
    cate: PropTypes.string.isRequired,
    type: PropTypes.string,
};
export default MovieList;
