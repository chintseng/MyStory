import API from './api';

const api = new API();

export const createStoryAPI = (body) => {
  return api.post('/', body);
};
