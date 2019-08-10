import React from "react";

import Header from "./Header/Header2";
import Footer from "./Footer/Footer";
import MoviesTabs from "./MoviesTabs/MoviesTabs";
import MoviesContainer from "./MoviesTabs/MoviesContainer";
import Genres from "./Genres";

import "./scss/style.scss";

const getGenresContainer = () => {
  const genresContainer = {};

  for (let genre of Genres) {
    const moviesContainer = new MoviesContainer(genre);
    genresContainer[genre] = moviesContainer;
  }
  return genresContainer;
};
const GenresContainer = getGenresContainer();

const footerLinks = [
  { link: "https://www.youtube.com/watch?v=4vIMg4tTIrc", title: "Deadpool wisdom" },
  { link: "mailto:eladr@gmail.com", title: "Need any help?" },
  { link: "https://www.facebook.com/elad.rapaport", title: "Say Hi on facebook" },
];

const MainPage = () => (
  <div className="sh-grid-container">
    <Header className="item1" genresContainer={GenresContainer} />
    <MoviesTabs
      className="item2"
      genresContainer={GenresContainer}
    />
    <Footer className="item3"
      footerLinks={footerLinks}
    />
  </div>
);

export default MainPage;
