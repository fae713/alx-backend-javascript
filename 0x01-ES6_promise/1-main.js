import getFullResponseFromAPI from './1-promise';

// Log the promise for a successful response
const promiseTrue = getFullResponseFromAPI(true);
console.log(promiseTrue);

// Log the promise for a failed response
const promiseFalse = getFullResponseFromAPI(false);
console.log(promiseFalse);
