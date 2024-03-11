export default function ({ $http, redirect }) {
  // console.log($http);
  // console.log('Interceptor is running');
  
  // Get the access token from localStorage
  if (process.client) {
    // Get the access token from localStorage
    const accessToken = localStorage.getItem('accessToken');
    // console.log(accessToken);

    // Set the Authorization header for all outgoing requests
    $http.setHeader('Authorization', `Bearer ${accessToken}`);
  }
  // const accessToken = localStorage.getItem('accessToken');
  // console.log(accessToken);


  // Log information about outgoing requests
  $http.onRequest(config => {
    // console.log('Making request to ' + config.url);
    // Additional logic or modifications to the request can be added here
  });

  // Handle errors in outgoing requests
  $http.onError(error => {
    // console.log(error);

    // Check if the error is due to unauthorized access
    // if (error === 'Unauthorized') {
      // console.log(error);
      redirect('/');
    // }
  });
}