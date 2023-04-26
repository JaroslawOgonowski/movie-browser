import { key, popularPeopleAPI,  } from "../../core/API";

export const getPopularPeople = async () => {
  try {
    const response = await fetch(`${popularPeopleAPI}?api_key=${key}&language=en-US&page=1`);
    if (!response.ok) {
      throw new Error("An error occurred while searching movies.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};