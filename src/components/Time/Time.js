import PropTypes from 'prop-types';

import classes from './Time.module.scss'

const Time = ({ minutes, seconds }) => {
    if (typeof minutes !== 'string') minutes = minutes.toString().padStart(2, '0');
    if (typeof seconds !== 'string') seconds = seconds.toString().padStart(2, '0');

    return (
        <time className={classes.time} dateTime={[0, minutes, seconds].join(':')}>
            <span className={classes.time__card}>
                {minutes}
            </span>
            <span>:</span>
            <span className={classes.time__card}>
                {seconds}
            </span>
        </time>
    )
}

Time.propTypes = {
    minutes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    seconds: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Time.defaultProps = {
    minutes: '00',
    seconds: '00'
}

export default Time