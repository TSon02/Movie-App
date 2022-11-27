import PropsType from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ onClick, className, children, small, large, main, outline }) {
    return (
        <button
            onClick={onClick ? onClick : null}
            className={cx('btn', { [className]: className, small, main, large, outline })}
        >
            {children}
        </button>
    );
}

Button.propsType = {
    className: PropsType.string,
    onClick: PropsType.func,
    children: PropsType.node.isRequired,
};

export default Button;
