import axios from 'axios';

const getAppDataApi = async parameters => {
  return axios.get(parameters.path);
};

export {
  getAppDataApi
};
