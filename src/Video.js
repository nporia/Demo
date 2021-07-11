import React from 'react';
import Videochat from './components/Videochat/Videochat';
import { ContextProvider } from './components/Videochat/Context.js';

function Video() {
  return (
    <ContextProvider>
      <Videochat />
    </ContextProvider>
  );
}

export default Video;

