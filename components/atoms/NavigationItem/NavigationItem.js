import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const NavigationItem = ({
  href,
  hash,
  title,
  variants,
  initial,
  animate,
  customDelay
}) => {
  const { asPath } = useRouter();
  const isActive = asPath.startsWith(href);

  return (
    <motion.li
      variants={variants}
      initial={initial}
      animate={animate}
      custom={customDelay}
    >
      <Link href={{ pathname: href, hash: hash }}>
        <a
          className={
            (isActive
              ? 'font-bold text-off-black dark:text-off-white'
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
  href: PropTypes.string,
  title: PropTypes.string,
  variants: PropTypes.shape({
    hidden: PropTypes.objectOf(PropTypes.number),
    visible: PropTypes.func
  }),
  initial: PropTypes.string,
  animate: PropTypes.string,
  customDelay: PropTypes.number
};

export { NavigationItem };
