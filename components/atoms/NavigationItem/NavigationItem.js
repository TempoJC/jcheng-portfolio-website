import Link from 'next/link';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const NavigationItem = ({
  animate,
  customDelay,
  hash,
  initial,
  isActive,
  onClick,
  title,
  variants
}) => (
  <motion.li
    animate={animate}
    custom={customDelay}
    initial={initial}
    variants={variants}
  >
    <Link href={{ pathname: '/', hash: hash }} scroll={false}>
      <a
        className={
          (isActive
            ? 'font-bold text-off-black dark:text-off-white '
            : 'font-medium text-grey-700 md:text-grey-500 hover:text-off-black dark:hover:text-off-white',
          'md:underlined transition relative block whitespace-nowrap text-2xl md:text-lg')
        }
        onClick={onClick}
      >
        {title}
      </a>
    </Link>
  </motion.li>
);

NavigationItem.propTypes = {
  animate: PropTypes.string,
  customDelay: PropTypes.number,
  initial: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  variants: PropTypes.shape({
    hidden: PropTypes.objectOf(PropTypes.number),
    visible: PropTypes.func
  })
};

NavigationItem.defaultProps = {
  onClick: () => {}
};

export { NavigationItem };
