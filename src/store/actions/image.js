import { IMAGE_NEW_IMAGE } from '../actionTypes';

export const addNewImage = (imageData) => {
  return (dispatch) => {
    dispatch({
      type: IMAGE_NEW_IMAGE,
      imageData,
    });
  };
};

