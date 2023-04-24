export const getMovie = async (query) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b2d37cc721e707dfb0e0916acc249569&language=en-US&query="+${query}+"&page=1&include_adult=false`);
  if (!response.ok) {
    new Error(response.statusText);
  }
  return await response.json();
};

export const getPeople = async (query) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=b2d37cc721e707dfb0e0916acc249569&language=en-US&query="+${query}+"&page=1&include_adult=false`);
  if (!response.ok) {
    new Error(response.statusText);
  }
  return await response.json();
};