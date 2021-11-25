export default {

  /**
   * Node server host
   */
  host: process.env.NODE_HOST || 'localhost',

  /**
   * Node server port
   */
  port: process.env.PORT || '3000',

  /**
   * Back-end server base url
   */
  apiBaseUrl: 'http://localhost:8000/api',

  /**
     * Back-end server base url for images
   */
  baseUrl: 'http://localhost:8000/',

  /**
   * Site base url
   */
  siteBaseUrl: 'http://localhost:8000',

  /**
   * Default connect timeout, ms
   */
  connectTimeout: 20000,

  /**
   * Default error string for backend request without answer
   */
  connectErrorMessage: 'Connect error, try again later or contact the service administrator.',

  /**
   * Default error string for backend request with returned status >= 500
   */
  serverErrorMessage: 'Server error, try again later or contact the service administrator.',

  /**
   * Default meta content
   */
  app: {
    title: 'МЦ «Ладушки»',
    titleTemplate: '%s',
    meta: [
      {
        name: 'description',
        content: 'МЦ «Ладушки»'
      },
      {
        name: 'keywords',
        content: 'МЦ «Ладушки»'
      },
      {
        name: 'theme-color',
        content: '#FFFFFF'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'default'
      },
      {
        name: 'yandex-verification',
        content: '7cfb9181f66a4fc6'
      },
      {
        name: 'wmail-verification',
        content: 'fa9eaba2333dadbf58134cdc959c29f9'
      },
      {
        name: 'google-site-verification',
        content: '_0Xn9DlFtGE-iKq7JD4OR2bjvxW-FmX1FgsrS2SEuUI'          
      }
    ]
  }
};
