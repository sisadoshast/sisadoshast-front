import fetchIntercept from 'fetch-intercept';
import Cookies from 'js-cookie'

fetchIntercept.register({
  request: function (url, config) {
    console.log('1')
    console.log(config)
    console.log(url)
    if (!config) {
      config = {}
    }

    let cookies
    if (process.server) {
    } else {
      cookies = Cookies.get('access_token_360')
    }

    if (cookies) {
      if (!config.headers) {
        config.headers = {}
      }
      console.log('adding headers')
      console.log(Cookies.get('access_token_360'))
      Object.assign(config.headers, {
        'AUTHORIZATION': `Bearer ${Cookies.get('access_token_360')}`
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
