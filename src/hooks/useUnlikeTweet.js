import {useContext} from 'react';
import {Context as TimeLineContext} from '../context/timeLineContext';
export default () => {
  const {unlikeTweet, reset} = useContext(TimeLineContext);
  const unlikeTweetObj = async post_id => {
    await unlikeTweet(post_id);
    // reset();
  };
  return [unlikeTweetObj];
};
