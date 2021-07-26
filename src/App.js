import React, { useState, useEffect } from "react";

import NavBar from "./NavBar";
import MovieList from "./MovieList";

import "./App.css";

const APIURL =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI =
	"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

/*
  Steps:

    -State:
      -currentMovies, setCurrentMovies
      -will need a variable that determines whether or not overview is shown

    -Create a Nav Component which includes a form with an input search box
    -Add a method in App called fetchRandomMovies()
      -fetchRandomMovies() will reach out to the APIURL and return a list of randomMovies from the API
      -This function will need to be used inside of useEffect

*/

function App() {
	const [currentMovies, setCurrentMovies] = useState([]);
	const [overviewId, setOverviewId] = useState(-1);

	useEffect(() => {
		fetchRandomMovies();
	}, []);

	const handleSearch = (e) => {
		e.preventDefault();

		const searchTerm = e.target.search.value;

		fetchSearchMovies(searchTerm);
	};

  const fetchSearchMovies = async (searchTerm) => {
    const response = await fetch(`${SEARCHAPI}${searchTerm}`);
    const responseJson = await response.json();

    const { results } = responseJson;

    setCurrentMovies(results);

    console.log('currentMovies is', currentMovies)
  } 

	const fetchRandomMovies = async () => {
		try {
			const response = await fetch(APIURL);
			const responseJson = await response.json();

			const { results } = responseJson;

			setCurrentMovies(results);
		} catch (error) {
			console.log("error", error);
		}
	};

	const handleOverviewClick = (movieId) => {
		overviewId === movieId ? setOverviewId(-1) : setOverviewId(movieId);
	};

	return (
		<div className="App">
			<NavBar onSearch={handleSearch} />
			<main>
				<MovieList
					onOverviewClick={handleOverviewClick}
					movies={currentMovies}
					overviewId={overviewId}
				/>
			</main>
		</div>
	);
}

export default App;
