function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a successful response from the API');
      return { status: 200, body: 'success' }; // Corrected the syntax here
    })
    .catch(() => {
      console.log('Got an error response from the API');
      return new Error('API Error'); // Optionally, you can add an error message
    });
}
export default handleResponseFromAPI;
