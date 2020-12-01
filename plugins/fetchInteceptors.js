import fetchIntercept from 'fetch-intercept';
import { storeInstance } from '~/store'

fetchIntercept.register({
  request: function (url, config) {
    if (storeInstance.state.token && !url.includes('/api/authenticate')) {
      if (!config.headers) {
        config.headers = {}
      }
      Object.assign(config.headers, {
        'AUTHORIZATION': `Bearer ${storeInstance.state.token}`
      })
    }
    return [url, config];
  },

  requestError: function (error) {
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: function (response) {
    // Modify the reponse object
    return response;
  },

  responseError: function (error) {
    // Handle an fetch error
    return Promise.reject(error);
  }
});
