import PropsType from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ onClick, className, children, outline, small, large }) {
    return (
        <button
            onClick={onClick ? onClick : null}
            className={cx('btn', { [className]: className, outline, small, large })}
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
