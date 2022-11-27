import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import bg from '~/assets/bg.jpg';
import { LogoIcon } from '../Icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')} style={{ backgroundImage: `url(${bg})` }}>
            <div className={cx('content', 'container')}>
                <div className={cx('content__logo')}>
                    <Link to="/">
                        <LogoIcon />
                    </Link>
                </div>

                <div className={cx('content__menu')}>
                    <ul className={cx('menu-list')}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Contact us</Link>
                        </li>
                        <li>
                            <Link to="/">Term of Services</Link>
                        </li>
                        <li>
                            <Link to="/">About us</Link>
                        </li>
                    </ul>

                    <ul className={cx('menu-list')}>
                        <li>
                            <Link to="/">Live</Link>
                        </li>
                        <li>
                            <Link to="/">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/">Premium</Link>
                        </li>
                        <li>
                            <Link to="/">Pravacy Policy</Link>
                        </li>
                    </ul>

                    <ul className={cx('menu-list')}>
                        <li>
                            <Link to="/">You Must Watch</Link>
                        </li>
                        <li>
                            <Link to="/">Recent Release</Link>
                        </li>
                        <li>
                            <Link to="/">Top IMDB</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
