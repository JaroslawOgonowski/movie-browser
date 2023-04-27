export const getGenres = async () => {
    try {
        const response = await fetch(`
      https://api.themoviedb.org/3/genre/movie/list?api_key=b2d37cc721e707dfb0e0916acc249569&language=en-US`);
        if (!response.ok) {
            throw new Error("Something gone wrong ");
        }
        const genres = await response.json();
        return genres;
    } catch (error) {
        console.error(error);
    }
}
