    export const getSearchMoviesList = async (query) => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b2d37cc721e707dfb0e0916acc249569&language=en-US&query="+${query}+"&page=1&include_adult=false`);
        if (!response.ok) {
          throw new Error("An error occurred while searching movies.");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    };


    export const getSearchPeopleList = async (query) => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=b2d37cc721e707dfb0e0916acc249569&language=en-US&query="+${query}+"&page=1&include_adult=false`);
        if (!response.ok) {
          throw new Error("An error occurred while searching people.");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    };