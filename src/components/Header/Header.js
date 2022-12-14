import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { LogoIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const headerNav = [
    {
        display: 'Home',
        path: '/',
    },
    {
        display: 'Movies',
        path: '/movie',
    },
    {
        display: 'TV Series',
        path: '/tv',
    },
];

function Header() {
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 100) {
                headerRef.current.classList.add(cx('scroll'));
            } else {
                headerRef.current.classList.remove(cx('scroll'));
            }
        }
        window.addEventListener('scroll', handleScroll);
    }, []);
    const headerRef = useRef(null);
    return (
        <div className={cx('header')} ref={headerRef}>
            <div className={cx('header-wrap')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <LogoIcon />
                    </Link>
                </div>
                <ul className={cx('header-nav')}>
                    {headerNav.map((navItem, index) => {
                        return (
                            <li key={index}>
                                <Link to={navItem.path}>{navItem.display}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Header;
