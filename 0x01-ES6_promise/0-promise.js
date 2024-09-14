function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // Simulate success/failure
      if (success) {
        resolve('API response data');
      } else {
        reject(new Error('API request failed'));
      }
    }, 1000);
  });
}

export default getResponseFromAPI;
