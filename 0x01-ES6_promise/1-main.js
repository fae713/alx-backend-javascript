import getFullResponseFromAPI from './1-promise';

// Handling a successful response
getFullResponseFromAPI(true)
.then(response => {
    console.log('Success:', response); // Logs the success response
  })
.catch(error => {
    console.error('Error:', error.message);
  });

// Handling a failed response
getFullResponseFromAPI(false)
.then(response => {
    console.log('Success:', response);
  })
.catch(error => {
    console.error('Error:', error.message); // Logs the error message
  });