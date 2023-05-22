import React,{useState,useEffect} from 'react';
import { useSnapshot } from "valtio";
import {motion,AnimatePresence} from 'framer-motion';

import config from '../config/config';
import state from '../store';
import {download} from '../assets';
import {downloadCanvasToImage,reader} from '../config/helpers';
import {EditorTabs, FilterTabs,DecalTypes} from '../config/constants';
import { fadeAnimation,slideAnimation } from '../config/motion';
import { AIPicker,ColorPicker,CustomButton, FilePicker,Tab } from '../components';

const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className='absolute top-0 left-0 z-10'
            {...slideAnimation}
          >
            <div className='flex items-center min-h-screen'>
              <div className='editortabs-container tabs'>
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => {}}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer