import { key, personAPI } from "../../../core/API";

export const getPersonByID = async (id) => {
  try {
    const response = await fetch(`${personAPI}${id}?api_key=${key}&language=en-US`);
    if (!response.ok) {
      throw new Error("An error occurred while searching movies.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};


export const getPersonInMoviesByID = async (id) => {
  try {
    const response = await fetch(`${personAPI}${id}/movie_credits?api_key=${key}&language=en-US`);

    if (!response.ok) {
      throw new Error("An error occurred while searching movies.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};



