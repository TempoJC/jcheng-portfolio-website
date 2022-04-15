import PropTypes from 'prop-types';

const BurgerIcon = ({ isOpen }) => (
  <div className={`burger-icon ${isOpen ? 'open' : ''}`}>
    <span />
    <span />
    <span />
    <span />
  </div>
);

BurgerIcon.propTypes = {
  isOpen: PropTypes.bool
};

BurgerIcon.defaultProps = {
  isOpen: false
};

export { BurgerIcon };
