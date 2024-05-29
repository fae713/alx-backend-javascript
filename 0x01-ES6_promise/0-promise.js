function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Getting an API call with a chance of failure
    const ApiResponse = () => {
      // Introduce a random chance to getting API failure
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve('API response data');
      } else {
        reject(new Error('Failed API response'));
      }
    };

    setTimeout(ApiResponse, 1000);
  });
}

export default getResponseFromAPI;
