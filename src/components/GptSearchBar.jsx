import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import ai from "../utils/gemAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const dispatch= useDispatch();
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json= await data.json();

    return json.results;
  };

  const handleGptSearchClicked = async () => {
    console.log(searchText.current.value);
    //make an api call to gemai and get movies result

    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperared like the example result given ahead. Example result: Gadar, Sholay, Don , Movies A , Movies B incase of blank search or unrelated just skip it or let the result be blank dont return anything not even a single word ";
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: query,
    });
    // console.log(response.text);
    if(response.text == 'null') return null;
    const aiMovies = response.text.split(",");
    // console.log(aiMovies);
    

    //for each movie I'll search for it in tmdb api
    const promiseArray =aiMovies.map((movie)=> searchMovieTmdb(movie));
    //[Prmoise, Prmoise, Prmoise, Prmoise, Prmoise]

    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);
    dispatch(addGptMovieResult({movieNames:aiMovies, movieResults:tmdbResults}));
  };
  return (
    <div className="pt-[50%] md:pt-[10%] flex justify-center">
      <form
        className="w-screen md:w-1/2 bg-black grid grid-cols-12"
        onClick={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-white col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-500 text-white rounded-lg col-span-3 cursor-pointer"
          onClick={handleGptSearchClicked}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
