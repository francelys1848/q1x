import React from "react";
import "./styles.css";

const movies = [
  { name: "Star Wars", link: "https://www.starwars.com/" },
  { name: "The Breakfast Club", link: "https://www.imdb.com/title/tt0088847/" },
  { name: "Alien", link: "https://www.imdb.com/title/tt0078748/" }
];

function MovieList(props) {
  //complete this component to render a list of "Movie" components
  // pass the array above as 'props.movies'

  const movies = props.movies.map(function(movie){
return <Movie name={movie.name} link={movie.link} />
  });
  return <ul>{movies}</ul>;
}

function Movie(props) {
  // Complete this component to render a single "Movie"
  // pass a "name" and a "link" prop, render link with `href` set to
  // the value of the "link" prop and render the "name" inside the `a` tag.
  const name = props.name;
  const link = props.link;
  return (<li>
    <a href={link}>{name}</a>
  </li>
  );
}

function App() {
  return <MovieList movies={movies} >/;
  (
    <ul>
      <li>
        <a href={movies[0].link}>{movies[0].name}</a>
      </li>
      <li>
        <a href={movies[1].link}>{movies[1].name}</a>
      </li>
      <li>
        <a href={movies[2].link}>{movies[2].name}</a>
      </li>
    </ul>
  );
}

export { MovieList, Movie, movies };

export default App;
