import { IMAGE_NEW_IMAGE } from '../actionTypes';

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_NEW_IMAGE:
      return {
        ...state,
        data: [...state.data, action.imageData],
      };
    default:
      return state;
  }
};
export default reducer;
