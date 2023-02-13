import React from 'react';
import TimeLine from './src/screens/Timeline';
import {Provider as TimelineProvider} from './src/context/timeLineContext';

export default App = () => {
  return (
    <TimelineProvider>
      <TimeLine />
    </TimelineProvider>
  );
};
