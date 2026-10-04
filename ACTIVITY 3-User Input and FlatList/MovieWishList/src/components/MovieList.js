import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import styles from "../styles/styles";

export default function MovieList({
  movies,
  toggleWatched,
  deleteMovie,
}) {
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            No movies in your wishlist yet.
          </Text>
        </View>
      }
      renderItem={({ item }) => (
        <View style={styles.movieItem}>
          <TouchableOpacity
            style={styles.movieInfo}
            onPress={() => toggleWatched(item.id)}
          >
            <Text
              style={[
                styles.movieTitle,
                item.watched && styles.watchedMovie,
              ]}
            >
              {item.watched ? "✓ " : "○ "}
              {item.title}
            </Text>

            <Text style={styles.status}>
              {item.watched ? "Watched" : "Not watched"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deleteMovie(item.id)}
          >
            <Text style={styles.deleteText}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}