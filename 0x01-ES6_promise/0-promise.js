function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("API response data");
		}, 1000);
	});
}

export default getResponseFromAPI;
