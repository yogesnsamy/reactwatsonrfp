import axios from 'axios';
export default axios.create({
  // baseURL: `https://gateway-syd.watsonplatform.net/discovery/api/v1/environments/${env_id}/collections/${coll_id}`,
  //https://gateway-syd.watsonplatform.net/discovery/api/v1/environments/f8bab378-f04e-44fe-a29c-50d71df62546/collections/a06387cb-8b68-4787-a1f4-4f1ab303ad74
  // /query?version=2018-12-03&count=3&deduplicate=false&highlight=true&passages=true&passages.count=3&natural_language_query=ada%20compliance
  baseURL: `${process.env.REACT_APP_DISC_URL}/v1/environments/${
    process.env.REACT_APP_ENV_ID
  }/collections/${process.env.REACT_APP_COLL_ID}`,
  params: {
    version: process.env.REACT_APP_VERSION,
    count: '3'
  },
  auth: {
    username: 'apikey',
    password: process.env.REACT_APP_APIKEY
  }
});
