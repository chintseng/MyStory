import { createStoryAPI } from '../../apis/story';

export const createStory = (title) => {
  return async (dispatch, getState) => {
    const { image: { data: images } } = getState();
    const body = {
      title,
      images: images.map(image => image.base64),
    };
    const result = await createStoryAPI(body);
    console.log(result);
  };
};

