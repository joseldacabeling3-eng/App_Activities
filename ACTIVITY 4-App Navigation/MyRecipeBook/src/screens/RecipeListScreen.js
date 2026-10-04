import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import styles from "../styles/styles";

const recipes = [
  {
    id: "1",
    name: "Chicken Adobo",
    category: "Filipino",
    time: "45 minutes",
    emoji: "🍗",
    ingredients:
      "Chicken, soy sauce, vinegar, garlic, onion, bay leaves, black pepper, and water.",
    instructions:
      "Marinate the chicken in soy sauce and garlic. Cook the chicken until lightly browned. Add vinegar, bay leaves, black pepper, and water. Cover and simmer until the chicken is tender and the sauce becomes rich and flavorful.",
  },

  {
    id: "2",
    name: "Spaghetti Carbonara",
    category: "Italian",
    time: "30 minutes",
    emoji: "🍝",
    ingredients:
      "Spaghetti, eggs, bacon, Parmesan cheese, garlic, black pepper, and salt.",
    instructions:
      "Cook the spaghetti until tender. Fry the bacon until crispy. Mix the eggs and Parmesan cheese in a bowl. Combine the hot pasta with the bacon. Add the egg mixture and stir until creamy.",
  },

  {
    id: "3",
    name: "Pancakes",
    category: "Breakfast",
    time: "20 minutes",
    emoji: "🥞",
    ingredients:
      "Flour, milk, eggs, sugar, baking powder, butter, and a pinch of salt.",
    instructions:
      "Mix the flour, sugar, baking powder, and salt. Add the milk and eggs and mix until smooth. Heat a pan and add butter. Pour the batter into the pan and cook both sides until golden brown.",
  },

  {
    id: "4",
    name: "Chicken Sandwich",
    category: "Snack",
    time: "25 minutes",
    emoji: "🥪",
    ingredients:
      "Bread, chicken breast, lettuce, tomato, mayonnaise, cheese, and black pepper.",
    instructions:
      "Cook and season the chicken breast. Toast the bread lightly. Spread mayonnaise on the bread. Add lettuce, tomato, chicken, and cheese. Place another slice of bread on top and serve.",
  },
];

export default function RecipeListScreen({ navigation }) {
  const renderRecipe = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.recipeCard}
        onPress={() =>
          navigation.navigate("RecipeDetails", {
            recipe: item,
          })
        }
      >
        <View style={styles.recipeContent}>
          <View style={styles.emojiCircle}>
            <Text style={styles.recipeEmoji}>
              {item.emoji}
            </Text>
          </View>

          <View style={styles.recipeTextContainer}>
            <Text style={styles.recipeTitle}>
              {item.name}
            </Text>

            <Text style={styles.recipeInfo}>
              {item.category} • {item.time}
            </Text>

            <Text style={styles.viewRecipe}>
              View Recipe →
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>
        Choose a Recipe 💕
      </Text>

      <Text style={styles.sectionSubtitle}>
        Tap My recipe to see the ingredients and instructions.
      </Text>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipe}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}