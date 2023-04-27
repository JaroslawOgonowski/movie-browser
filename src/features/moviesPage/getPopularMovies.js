import { key, popularMoviesAPI } from "../../core/API";

export const getPopularMovies = async (page) => {
  try {
    const response = await fetch(`${popularMoviesAPI}?api_key=${key}&language=en-US&page=${page}`);
    if (!response.ok) {
      throw new Error("An error occurred while searching movies.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};