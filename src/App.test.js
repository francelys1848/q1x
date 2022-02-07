import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App, { Movie, MovieList, movies } from "./App";

/**************************************************************************************************
 * Volunteers: add you tests here. They should be failing, but the students should be able to make
 * them pass by editing the other files.
 **************************************************************************************************/

describe("Tests", () => {
  test("should render the correct html", () => {
    const { getByText } = render(<App />);
    movies.forEach(({ name }) => {
      expect(getByText(name).textContent).toBe(name);
    });
  });

  test("MovieList should render a list of movies", () => {
    const { getByText } = render(<MovieList movies={movies} />);
    movies.forEach(({ name }) => {
      expect(getByText(name).textContent).toBe(name);
    });
  });

  test("Movie should render a Movie", () => {
    const { getByText } = render(
      <Movie name="testName" link="testLink"></Movie>
    );
    const content = getByText("testName");
    expect(content.attributes.href).toBe("testLink");
    expect(content.innerText).toBe("testName");
  });
});
