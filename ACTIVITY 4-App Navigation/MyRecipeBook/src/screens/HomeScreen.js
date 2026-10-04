import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "../styles/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeEmoji}>🍓</Text>

      <Text style={styles.homeTitle}>Joselda's Recipe Book</Text>

      <Text style={styles.homeSubtitle}>
        Delicious recipes made with love ♡
      </Text>

      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeEmoji}>🍰</Text>

        <Text style={styles.welcomeTitle}>
          Welcome, Food Lover!
        </Text>

        <Text style={styles.welcomeText}>
          Explore simple and delicious recipes for your next meal.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.navigate("RecipeList")}
      >
        <Text style={styles.mainButtonText}>
          View My Recipes 🍴
        </Text>
      </TouchableOpacity>
    </View>
  );
}