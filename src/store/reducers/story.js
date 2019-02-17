import uuid from 'uuid/v4';
import { STORY_NEW_STORY } from '../actionTypes';

const initialState = {
  data: [
    {
      key: uuid(),
      title: 'Monday',
      content: 'today is Monday',
      mock: true,
    },
    {
      key: uuid(),
      title: 'Tuesday',
      content: 'today is Tuesday',
      mock: true,
    },
    {
      key: uuid(),
      title: 'Wednesday',
      content: 'today is Wednesday',
      mock: true,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORY_NEW_STORY:
      return {
        ...state,
        data: [action.story, ...state.data],
      };
    default:
      return state;
  }
};
export default reducer;
