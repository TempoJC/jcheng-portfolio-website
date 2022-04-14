import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NavigationItem } from '@/Atoms/NavigationItem/index';
import { ThemeToggle } from '@/Atoms/ThemeToggle';
import { BurgerIcon } from '@/Atoms/BurgerIcon';
import { MobileMenu } from '@/Molecules/MobileMenu/';

export const navItems = [
  { hash: 'about', title: 'About' },
  { hash: 'skills', title: 'Skills' },
  { hash: 'projects', title: 'Projects' },
  { hash: 'contact', title: 'Contact' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('/');
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  const handleHashChange = (url, { shallow }) => {
    setActiveHash(url);
  };

  useEffect(() => {
    router.events.on('hashChangeStart', handleHashChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('hashChangeStart', handleHashChange);
    };
  }, []);

  const navigationVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom }
    })
  };

  return (
    <>
      <header className="fixed w-full z-50 px-4 lg:px-20 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" passHref>
            <motion.a
              className="group relative transition whitespace-nowrap hover:transition duration-300 text-2xl font-bold"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -10 }}
            >
              <span className="transition duration-300 opacity-100 group-hover:opacity-0">
                @TempoJC
              </span>
              <span className="absolute transition duration-300 left-0 opacity-0 group-hover:opacity-100 text-transparent bg-clip-text hover:bg-gradient-to-r from-light-start to-light-stop dark:from-dark-start dark:to-dark-stop">
                Jose Camargo
              </span>
            </motion.a>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-8 text-lg">
              {navItems.map(({ hash, title }, index) => (
                <NavigationItem
                  animate="visible"
                  customDelay={(index + 1) * 0.1}
                  hash={hash}
                  initial="hidden"
                  isActive={activeHash === `/#${hash}`}
                  key={`${hash}${index}`}
                  title={title}
                  variants={navigationVariants}
                />
              ))}
            </ul>
          </nav>

          <button
            className="absolute z-50 top-8 right-4 md:hidden"
            onClick={() => setIsOpen(prev => !prev)}
            aria-label="Menu"
          >
            <BurgerIcon isOpen={isOpen} />
          </button>

          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isOpen} activeHash={activeHash} />
    </>
  );
};

export { Header };
