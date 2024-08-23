import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleFilm from "./SingleFilm";

class Gallery extends Component {
  state = {
    filmImg: [],
    isLoading: true,
  };

  fetchFilms = () => {
    fetch("https://www.omdbapi.com/?apiKey=519665a8&s=" + this.props.filmTitle)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella richiesta!!");
        }
      })
      .then((data) => {
        console.log("FILM DAL SERVER", data["Search"]);
        this.setState({ filmImg: data["Search"], isLoading: false });
      })
      .catch((e) => {
        console.log("Errore!!", e);
      });
  };

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    const { filmImg, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading films...</p>;
    }

    return filmImg.map((film, index) => {
      if (index < 6) {
        return (
          <SingleFilm key={index} poster={film.Poster} alt={"Film " + index} />
        );
      }
      else {
        return "";
      }
    });
  }
}

export default Gallery;
