const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a26f6f15ca8621fe5c0bb19d829ed65a',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
