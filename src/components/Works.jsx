import React from "react";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import Projects3D from "./Works3D";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex mb-10'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-seconday tex-[17px] max-w-3xl leading-[30px]'>
          Here are some of the projects I have worked on.
        </motion.p>
      </div>

      <Projects3D projects={projects} />
    </>
  );
};

export default SectionWrapper(Works, "project");