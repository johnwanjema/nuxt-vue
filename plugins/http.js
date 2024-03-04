export default function ({ $http, redirect }) {
  console.log($http)
  console.log('Interceptor is running');
  // const  accessToken= localStorage.getItem('accessToken');
  // console.log(accessToken)

    $http.onRequest(config => {
      console.log('Making request to ' + config.url)
    })
  
    $http.onError(error => {
      console.log('Error request to ' + error)
      if (error.HTTPError === 'HTTPError: Unauthorized') {
          console.log( + error)
          redirect('/')
      }
    })
  }