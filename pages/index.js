import { AnimatePage } from '@/Atoms/AnimatePage';
import { SeoHead } from '@/Atoms/SeoHead';
import { Hero } from '@/Organisms/Hero';
import React, { createRef, useEffect, useRef, useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import About from './about';
import Contact from './contact';
import Experience from './experience';
import Projects from './projects';
import Skills from './skills';

const IndexPage = () => {
  const personalRef = createRef();
  const skillsRef = createRef();
  const experienceRef = createRef();
  const portfolioRef = createRef();
  const contactRef = createRef();

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  // useEffect(() => {
  //   let observer;

  //   if (
  //     personalRef.current &&
  //     skillsRef.current &&
  //     experienceRef.current &&
  //     portfolioRef.current &&
  //     contactRef.current
  //   ) {
  //     const options = {
  //       threshold: 0.2
  //     };

  //     console.log(personalRef.current);

  //     observer = new IntersectionObserver((entries, observer) => {
  //       log(entries);

  //       entries.forEach(entry => {
  //         const navElement = document.querySelector(
  //           `a[href="/#${entry.target.id}"]`
  //         );
  //         if (
  //           entry.isIntersecting &&
  //           !navElement.classList.contains('active')
  //         ) {
  //           navElement.classList.add('active');
  //         } else if (
  //           !entry.isIntersecting &&
  //           navElement.classList.contains('active')
  //         ) {
  //           navElement.classList.remove('active');
  //         }
  //       });
  //     }, options);
  //     observer.observe(personalRef.current);
  //     observer.observe(skillsRef.current);
  //     observer.observe(experienceRef.current);
  //     observer.observe(portfolioRef.current);
  //     observer.observe(contactRef.current);
  //   }
  //   return () => observer.disconnect();
  // }, [personalRef, skillsRef, experienceRef, portfolioRef, contactRef]);

  return (
    <>
      <AnimatePage>
        <SeoHead
          title="Senior Software Engineer – Jose Palacios"
          description="A Front-End Software Engineer with a focus on JavaScript and React. I have more than 7 years experience working in software engineering."
        />
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        {/* <Experience ref={experienceRef}></Experience> */}
        <Projects></Projects>
        <Contact></Contact>
      </AnimatePage>
    </>
  );
};

export default IndexPage;
