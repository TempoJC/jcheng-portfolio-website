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
  const portfolioRef = createRef();
  const contactRef = createRef();

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <>
      <SeoHead
        title="Senior Software Engineer – Jose Luis Camargo"
        description="A Front-End Software Engineer with a focus on JavaScript and React. I have more than 7 years experience working in software engineering."
      />
      <Hero></Hero>
      <About refNode={personalRef}></About>
      <Skills refNode={skillsRef}></Skills>
      {/* <Experience ref={experienceRef}></Experience> */}
      <Projects refNode={portfolioRef}></Projects>
      <Contact refNode={contactRef}></Contact>
    </>
  );
};

export default IndexPage;
