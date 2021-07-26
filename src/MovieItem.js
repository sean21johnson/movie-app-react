import React from "react";

const MovieItem = ({ movie, onOverviewClick, overviewId }) => {
	const IMGPATH = `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;

	const handleRatingDisplay = (rating) => {
		let ratingClass = "";

		if (rating >= 8) ratingClass = "movie_rating green";
		else if (rating >= 5 && rating < 8) ratingClass = "movie_rating orange";
		else {
			ratingClass = "movie_rating red";
		}

		return ratingClass;
	};

	return (
		<li className="movie_item">
			<div className="poster_container">
				<img src={IMGPATH} alt="poster"></img>
			</div>
			<div className="movie_info_container">
				<div className="title_container">
					<h2 className="movie_title">{movie.original_title}</h2>
					<h3 className={handleRatingDisplay(movie.vote_average)}>
						{movie.vote_average}
					</h3>
				</div>
				<div className="overview_container">
					<button onClick={() => onOverviewClick(movie.id)}>Overview</button>

					{overviewId === movie.id ? <p>{movie.overview}</p> : ""}
				</div>
			</div>
		</li>
	);
};

export default MovieItem;
