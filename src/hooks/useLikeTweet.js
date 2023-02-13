import {useContext} from 'react';
import {Context as TimeLineContext} from '../context/timeLineContext';
export default () => {
  const {likeTweet, reset} = useContext(TimeLineContext);
  const likeTweetObj = async post_id => {
    await likeTweet(post_id);
    // reset();
  };
  return [likeTweetObj];
};
