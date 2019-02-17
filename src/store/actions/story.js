import uuid from 'uuid/v4';
import { createStoryAPI } from '../../apis/story';
import { STORY_NEW_STORY } from '../actionTypes';
import { uiStartLoading, uiStopLoading } from './ui';
import { STORY_CREATING } from '../loadingTypes';

export const createStory = (title) => {
  return async (dispatch, getState) => {
    dispatch(uiStartLoading(STORY_CREATING));
    const { image: { data: images } } = getState();
    const body = {
      title,
      images: images.map(image => image.base64),
    };
    try {
      const result = await createStoryAPI(body);
      // const result = '123';
      dispatch({
        type: STORY_NEW_STORY,
        story: {
          title,
          key: uuid(),
          content: result,
          mock: false,
          images,
        },
      });
      dispatch(uiStopLoading(STORY_CREATING));
      return;
    } catch (e) {
      console.log(e);
      dispatch(uiStopLoading(STORY_CREATING));
    }
  };
};

