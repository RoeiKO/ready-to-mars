import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './InfoCard.module.scss';

const InfoCard = ({ title, description, img, className }) => {
    return (
        <div className={classnames(classes.card, className)}>
            <div className={classes.card__info}>
                <h1 className={classes.card__info__title}>
                    {title}
                </h1>
                <p className={classes.card__info__desc}>
                    {description}
                </p>
            </div>
            {img && <img className={classes.card__image} src={img.src} alt={img.alt} />}
        </div>
    );
}

InfoCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    })
};

InfoCard.defaultProps = {
    img: null
};

export default InfoCard;
