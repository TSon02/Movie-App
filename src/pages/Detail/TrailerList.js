import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '~/api/tmdbApi';
import styles from './Detail.module.scss';

const cx = classNames.bind(styles);

function TrailerList() {
    const [items, setItems] = useState([]);
    const { category, id } = useParams();
    useEffect(() => {
        async function getVideos() {
            const respone = await tmdbApi.getVideos(category, id);
            setItems(respone.results);
        }
        getVideos();
    }, [category, id]);

    return (
        <div className={cx('trailer')}>
            {items.slice(0, 5).map((item, index) => {
                return <Video key={index} data={item} />;
            })}
        </div>
    );
}

function Video({ data }) {
    return (
        <div className={cx('video')}>
            <h2 className={cx('title')}>{data.name}</h2>

            <iframe
                src={`https://www.youtube.com/embed/${data.key}`}
                title="video"
                width="100%"
                height="750px"
            ></iframe>
        </div>
    );
}
export default TrailerList;
