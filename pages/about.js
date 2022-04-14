import { Container } from '@/Atoms/Container';
import Image from 'next/image';
import me from '@/public/me.jpeg';

const About = ({ refNode }) => {
  const age = Math.floor(
    (new Date() - new Date('1988-11-22').getTime()) / 3.15576e10
  );

  return (
    <Container ref={refNode} id={'about'}>
      <div className="flex flex-row">
        <div className="w-1/3 m-auto">
          <Image
            className="rounded-full"
            priority
            alt="Profile picture"
            src={me}
            placeholder="blur"
            quality={100}
          />
        </div>
        <div className="w-2/3">
          <div className="ml-8">
            <h1 className="headline mb-6 text-3xl md:text-5xl lg:text-4xl">
              About me
            </h1>
            <p className="mb-4">
              Hi, I&apos;m Jose. I&apos;m {age} years old, living in Madrid.
              <br></br>
              I&apos;m a passionate Frontend Developer, currently working at
              Atresmedia.
            </p>
            <p className="mb-4">
              <strong className="headline">Curious</strong>, <br></br>I am a
              curios person who loves to learn and to explore some- thing new as
              well to look for a solution to any problem.
            </p>
            <p className="mb-4">
              <strong className="headline">Simple</strong>,<br></br>I like
              simplicity in life and do things in the simplest way so that I can
              do it with faster way but still with a great results.
            </p>
            <p className="mb-4">
              <strong className="headline">Adaptive</strong>, <br></br>I am be
              able to adapt to the new environment and to learn new things
              quickly.
            </p>
            <p className="mb-4">
              When I&apos;m not writing code, I love spending time with my loved
              ones and playing video games.
            </p>
            <p>
              You can read more about my work in the{' '}
              <a
                className="shadow-link hover:shadow-link-hover dark:shadow-link-dark dark:hover:shadow-link-dark-hover transition-shadow"
                href="#skills"
              >
                skills
              </a>{' '}
              and
              <a
                className="shadow-link hover:shadow-link-hover dark:shadow-link-dark dark:hover:shadow-link-dark-hover transition-shadow"
                href="#projects"
              >
                {' '}
                experience
              </a>{' '}
              sections.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
