import { key, searchAPI } from "../../core/API";

    
    export const getSearchMoviesList = async (query, page) => {
      try {
        const response = await fetch(`${searchAPI}/movie?api_key=${key}&language=en-US&query="+${query}+"&page=${page}&include_adult=false`);
        if (!response.ok) {
          throw new Error("An error occurred while searching movies.");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    };

    export const getSearchPeopleList = async (query, page) => {
      try {
        const response = await fetch(`${searchAPI}/person?api_key=${key}&language=en-US&query="+${query}+"&page=${page}&include_adult=false`);
        if (!response.ok) {
          throw new Error("An error occurred while searching people.");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    };