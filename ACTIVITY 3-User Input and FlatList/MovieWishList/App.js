import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import MovieList from "./src/components/MovieList";
import styles from "./src/styles/styles";

export default function App() {
  const [movieInput, setMovieInput] = useState("");
  const [movies, setMovies] = useState([]);

  const addMovie = () => {
    if (movieInput.trim() === "") {
      return;
    }

    const newMovie = {
      id: Date.now().toString(),
      title: movieInput.trim(),
      watched: false,
    };

    setMovies((currentMovies) => [
      ...currentMovies,
      newMovie,
    ]);

    setMovieInput("");
  };

  const toggleWatched = (id) => {
    setMovies((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === id
          ? {
              ...movie,
              watched: !movie.watched,
            }
          : movie
      )
    );
  };

  const deleteMovie = (id) => {
    setMovies((currentMovies) =>
      currentMovies.filter(
        (movie) => movie.id !== id
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        🎬 Movie Wishlist
      </Text>

      <Text style={styles.subtitle}>
        Keep track of movies you want to watch
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter movie title..."
          placeholderTextColor="#999"
          value={movieInput}
          onChangeText={setMovieInput}
          onSubmitEditing={addMovie}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={addMovie}
        >
          <Text style={styles.addButtonText}>
            Add
          </Text>
        </TouchableOpacity>
      </View>

      <MovieList
        movies={movies}
        toggleWatched={toggleWatched}
        deleteMovie={deleteMovie}
      />

      <View style={styles.footer}>
        <Text style={styles.counter}>
          Movies in wishlist: {movies.length}
        </Text>
      </View>
    </View>
  );
}