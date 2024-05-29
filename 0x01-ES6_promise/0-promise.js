function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'The API response data';
      resolve(data);
    }, 1000);
  });
}

export default getResponseFromAPI;
