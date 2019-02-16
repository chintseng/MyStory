import uuid from 'uuid/v4';
import { } from '../actionTypes';

const initialState = {
  data: [
    {
      key: uuid(),
      title: 'Monday',
    },
    {
      key: uuid(),
      title: 'Tuesday',
    },
    {
      key: uuid(),
      title: 'Wednesday',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
