import { key, popularMoviesAPI } from "../../core/API";

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${popularMoviesAPI}?api_key=${key}&language=en-US&page=1`);
    if (!response.ok) {
      throw new Error("An error occurred while searching movies.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};