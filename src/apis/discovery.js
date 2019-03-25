import axios from 'axios';
export default axios.create({
  // baseURL: `https://gateway-syd.watsonplatform.net/discovery/api/v1/environments/${env_id}/collections/${coll_id}`,
  baseURL: `${process.env.REACT_APP_DISC_URL}/v1/environments/${
    process.env.REACT_APP_ENV_ID
  }/collections/${process.env.REACT_APP_COLL_ID}`,
  params: {
    version: process.env.REACT_APP_VERSION
  },
  auth: {
    username: 'apikey',
    password: process.env.REACT_APP_APIKEY
  }
});
