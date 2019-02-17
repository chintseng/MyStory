import { IMAGE_NEW_IMAGE, IMAGE_RESET } from '../actionTypes';

export const addNewImage = (imageData) => {
  return (dispatch) => {
    dispatch({
      type: IMAGE_NEW_IMAGE,
      imageData,
    });
  };
};

export const resetImage = () => {
  return (dispatch) => {
    dispatch({
      type: IMAGE_RESET,
    });
  };
};

