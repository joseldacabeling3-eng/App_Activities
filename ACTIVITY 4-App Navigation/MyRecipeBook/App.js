import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import RecipeListScreen from "./src/screens/RecipeListScreen";
import RecipeDetailsScreen from "./src/screens/RecipeDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f6a6bb",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "My Recipe Book" }}
        />

        <Stack.Screen
          name="RecipeList"
          component={RecipeListScreen}
          options={{ title: "My Recipes" }}
        />

        <Stack.Screen
          name="RecipeDetails"
          component={RecipeDetailsScreen}
          options={{ title: "Recipe Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}