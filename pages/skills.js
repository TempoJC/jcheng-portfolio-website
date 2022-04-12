import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import brain from '../public/brain.png';
import { BLACK_ICON, COLOR_ICON } from '../constants';
import { Container } from '@/Atoms/Container';

const DARK_COLOR_THEME = 'dark';

const Skills = () => {
  const { theme } = useTheme();
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    if (theme) {
      setIcons(theme === DARK_COLOR_THEME ? COLOR_ICON : BLACK_ICON);
    }
  }, [theme]);

  return (
    <Container>
      <div className="flex flex-row">
        <div className="w-2/5 m-auto">
          <h1 className="headline mb-6 text-3xl md:text-5xl lg:text-4xl">
            Technologys 🥷
          </h1>

          <p className="mb-4">
            I’m a self-taught web developer with experience developing web
            applications, building websites and actively learning. I have strong
            knowledge of JavaScript and React Js - the technology I am
            interested in working with.
          </p>
        </div>

        <div className="w-3/5">
          <Image
            className="rounded-full"
            priority
            alt="brain picture"
            src={brain}
            placeholder="blur"
            quality={100}
          />
        </div>
      </div>
      <div className="flex flex-row mt-20">
        {icons &&
          icons.map((icon, index) => (
            <div
              className={`w-20 mx-10 ${icon.class ? icon.class : ''}`}
              key={index}
            >
              <Image priority alt={icon.alt} src={icon.src} quality={75} />
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Skills;
