import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import tmdbApi from '~/api/tmdbApi';
import { useEffect, useState } from 'react';
import apiConfig from '~/api/apiConfig';

import srcImage from '~/assets/non-person.jpeg';
const cx = classNames.bind(styles);

function ListCast({ cate, id }) {
    const [casts, setCasts] = useState([]);
    console.log(casts);
    useEffect(() => {
        async function getCast() {
            const respone = await tmdbApi.credits(cate, id);
            setCasts(respone.cast);
        }
        getCast();
    }, [cate, id]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('casts')}>
                {casts.slice(0, 5).map((cast, index) => {
                    return (
                        <div key={index} className={cx('casts__item')}>
                            <div
                                onClick={() => {
                                    console.log(apiConfig.w500Image(cast.profile_path));
                                }}
                                className={cx('casts__item-img')}
                                style={{
                                    backgroundImage: `url(${
                                        cast.profile_path !== null ? apiConfig.w500Image(cast.profile_path) : srcImage
                                    } )`,
                                }}
                            ></div>
                            <div className={cx('casts__item-name')}>{cast.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ListCast;
