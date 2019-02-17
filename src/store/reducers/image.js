import { IMAGE_NEW_IMAGE, IMAGE_RESET } from '../actionTypes';

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
    case IMAGE_RESET:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};
export default reducer;
