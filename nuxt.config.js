
export default {
  // mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "/js/core/jquery.min.js",
        body: true
      },
      {
        src: "/js/codebase.app.min.js",
        body: true
      },
      {
        src: "/js/codebase.core.min.js",
        body: true
      },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/codebase.min.css',
    '@/assets/css/codebase.min.css',
    // 'bootstrap/dist/css/bootstrap.css',
    // 'bootstrap-vue/dist/bootstrap-vue.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/bootstrap-vue.js', ssr: true }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/http'
  ],


  http: {
    baseURL: 'https://apptest.dekioz.co.ke/api', // Set your API base URL here
    // You can also configure other options for the http module if needed

    // Add an interceptor to modify headers
    // interceptors: {
    //   request: {
    //     onBefore({ method, headers }) {
    //       const accessToken = localStorage.getItem('accessToken');
    //       if (accessToken) {
    //         headers.set('Authorization', `Bearer ${accessToken}`);
    //       }
    //       return { method, headers };
    //     },
    //   },
    // },
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
