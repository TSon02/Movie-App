import classNames from 'classnames/bind';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({ cate, Search }) {
    const navigate = useNavigate();
    const [input, setInput] = useState('');

    console.log(input);

    function goValueSearch() {
        if (input.trim().length > 0) {
            navigate(`/${cate}/search/${input.trim()}`);
        }
    }
    return (
        <div className={cx('wrapper')}>
            <input
                value={input}
                placeholder="Search for a Movie, Tv"
                className={cx('search')}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            ></input>
            <Button
                main
                small
                className={cx('btn-search')}
                onClick={() => {
                    goValueSearch();
                }}
            >
                Search
            </Button>
        </div>
    );
}

export default Search;
