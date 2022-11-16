import PropTypes from 'prop-types';

import classnames from 'classnames';

import classes from './Button.module.scss';

const Button = ({ children, className, ...restProps }) => {

  return (
    <button className={classnames(classes.btn, className)} {...restProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  role: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  type: 'button',
  role: 'presentation',
  className: null
};

export default Button;
