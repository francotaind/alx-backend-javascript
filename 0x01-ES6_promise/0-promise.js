export default function getResponseFromAPI() {
    return new promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Response from API");
        }, 1000);
    });
}
