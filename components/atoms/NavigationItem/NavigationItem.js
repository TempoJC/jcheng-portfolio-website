import Link from 'next/link';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const NavigationItem = ({
  animate,
  customDelay,
  hash,
  initial,
  isActive,
  title,
  variants
}) => {
  return (
    <motion.li
      variants={variants}
      initial={initial}
      animate={animate}
      custom={customDelay}
    >
      <Link href={{ pathname: '/', hash: hash }}>
        <a
          className={
            (isActive
              ? 'font-bold text-off-black dark:text-off-white '
              : 'font-medium text-grey-700 md:text-grey-500 hover:text-off-black dark:hover:text-off-white',
            'md:underlined transition relative block whitespace-nowrap text-2xl md:text-lg')
          }
        >
          {title}
        </a>
      </Link>
    </motion.li>
  );
};

NavigationItem.propTypes = {
  title: PropTypes.string,
  variants: PropTypes.shape({
    hidden: PropTypes.objectOf(PropTypes.number),
    visible: PropTypes.func
  }),
  isActive: PropTypes.bool,
  initial: PropTypes.string,
  animate: PropTypes.string,
  customDelay: PropTypes.number
};

NavigationItem.defaultProps = {};

export { NavigationItem };
