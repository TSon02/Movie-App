import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import tmdbApi, { movieType, tvType } from '~/api/tmdbApi';
import styles from './MovieGrid.module.scss';
import { category as cate } from '~/api/tmdbApi';

import MovieItem from '../MovieItem';
import { useParams } from 'react-router-dom';
import Button from '../Button';
import Search from '../Search';

const cx = classNames.bind(styles);

function MovieGrid({ category }) {
    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);

    const { keyword } = useParams();
    console.log(keyword === undefined);
    console.log(items);
    useEffect(() => {
        async function getList() {
            let response = null;
            if (keyword === undefined) {
                switch (category) {
                    case cate.movie:
                        response = await tmdbApi.getMoviesList(movieType.popular, { params: {} });
                        break;
                    case cate.tv:
                        response = await tmdbApi.getTvList(tvType.popular, { params: {} });
                        break;
                    default:
                        break;
                }
                setItems(response.results);
            } else {
                response = await tmdbApi.search(category, { params: { query: keyword } });
                setItems(response.results);
            }
        }
        getList();
    }, [category, keyword]);

    async function loadMore() {
        let response = null;
        if (keyword === undefined) {
            const params = { page: page + 1 };
            switch (category) {
                case cate.movie:
                    response = await tmdbApi.getMoviesList(movieType.popular, { params });
                    break;
                case cate.tv:
                    response = await tmdbApi.getTvList(tvType.popular, { params });
                    break;
                default:
                    break;
            }
            setItems((prevValue) => {
                return [...prevValue, ...response.results];
            });
            setPage(page + 1);
        } else {
            response = await tmdbApi.search(category, { params: { query: keyword, page: page + 1 } });
            setItems((prevValue) => {
                return [...prevValue, ...response.results];
            });
        }
    }

    function handleSearch(data) {}
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('section', 'mb-3')}>
                    <div className={cx('section', 'mb-2')}>
                        <Search cate={category} Search={handleSearch}></Search>
                    </div>

                    <div className={cx('movie-grid')}>
                        {items.map((item, index) => {
                            return <MovieItem key={index} category={category} data={item}></MovieItem>;
                        })}
                    </div>

                    <div className={cx('load-more')}>
                        <Button outline small onClick={loadMore}>
                            Load More
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieGrid;
