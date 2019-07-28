import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    movieData.map((currentValue) => (
      <MovieCard 
        title={currentValue.title} 
        IMDBRating={currentValue.IMDBRating}
        genres = {currentValue.genres}
        poster = {currentValue.poster} />

    )
      
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
