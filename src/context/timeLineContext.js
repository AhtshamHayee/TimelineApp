import createDataContext from './createDataContext';
import Api from '../api/timeLineApi';
const timelineReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_Timeline':
      return {
        ...state,
        timeline: {
          totalPosts: action.payload.totalPosts,
          data: [...state.timeline.data, ...action.payload.data],
        },
      };
    case 'reset':
      return {...state};
    default:
      return state;
  }
};

const fetchTimeline = dispatch => async page => {
  const response = await Api.get('timeline?page=' + page);
  if (response.data?.data)
    dispatch({type: 'fetch_Timeline', payload: response.data});
};

const reset = dispatch => () => {
  dispatch({type: 'reset'});
};

const likeTweet = dispatch => async post_id => {
  const formData = new FormData();
  formData.append('post_id', post_id);
  const response = await Api.post('like', formData);
};

const unlikeTweet = dispatch => async post_id => {
  const formData = new FormData();
  formData.append('post_id', post_id);
  const response = await Api.post('unlike', formData);
};

export const {Context, Provider} = createDataContext(
  timelineReducer,
  {
    fetchTimeline,
    reset,
    likeTweet,
    unlikeTweet,
  },
  {
    timeline: {
      totalPosts: '',
      data: [],
    },
  },
);
