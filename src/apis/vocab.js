import API from './api';

const api = new API();

export const searchVocabAPI = (body) => {
  return api.post('/dictionary', body);
};

export const parseDocumentAPI = (body) => {
  return api.post('/parse', body);
};

