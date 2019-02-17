import API from './api';

const api = new API();

export const createStoryAPI = (body) => {
  // console.log(body);
  const postBody = {
    title: body.title,
  };
  return api.post('/', body);
};
