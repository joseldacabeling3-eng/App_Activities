import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8fa",
    paddingHorizontal: 18,
    paddingTop: 20,
  },

  homeContainer: {
    flex: 1,
    backgroundColor: "#fff8fa",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingTop: 45,
  },

  homeEmoji: {
    fontSize: 58,
    marginBottom: 8,
  },

  homeTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#a94f68",
    textAlign: "center",
    marginBottom: 8,
  },

  homeSubtitle: {
    fontSize: 16,
    color: "#8d727b",
    textAlign: "center",
    marginBottom: 30,
  },

  welcomeCard: {
    width: "100%",
    backgroundColor: "#ffe8ef",
    borderRadius: 25,
    padding: 28,
    alignItems: "center",
    marginBottom: 30,
  },

  welcomeEmoji: {
    fontSize: 55,
    marginBottom: 12,
  },

  welcomeTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#a94f68",
    marginBottom: 8,
  },

  welcomeText: {
    fontSize: 15,
    color: "#80636c",
    textAlign: "center",
    lineHeight: 23,
  },

  mainButton: {
    width: "100%",
    backgroundColor: "#f6a6bb",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
  },

  mainButtonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#a94f68",
    marginBottom: 5,
  },

  sectionSubtitle: {
    fontSize: 14,
    color: "#8d727b",
    marginBottom: 18,
  },

  listContainer: {
    paddingBottom: 25,
  },

  recipeCard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    marginBottom: 15,
    padding: 18,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 3,
  },

  recipeContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  emojiCircle: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: "#ffe8ef",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  recipeEmoji: {
    fontSize: 34,
  },

  recipeTextContainer: {
    flex: 1,
  },

  recipeTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#4e3b40",
    marginBottom: 5,
  },

  recipeInfo: {
    fontSize: 14,
    color: "#927780",
    marginBottom: 8,
  },

  viewRecipe: {
    fontSize: 14,
    color: "#d56b88",
    fontWeight: "bold",
  },

  detailsContainer: {
    flex: 1,
    backgroundColor: "#fff8fa",
  },

  detailsContent: {
    padding: 20,
    paddingBottom: 35,
  },

  detailsEmoji: {
    fontSize: 65,
    textAlign: "center",
    marginBottom: 8,
  },

  detailsTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#a94f68",
    textAlign: "center",
    marginBottom: 20,
  },

  infoBox: {
    backgroundColor: "#ffe8ef",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },

  infoText: {
    fontSize: 15,
    color: "#805764",
    marginBottom: 5,
  },

  detailsHeading: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#a94f68",
    marginBottom: 10,
    marginTop: 5,
  },

  textBox: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 15,
    marginBottom: 18,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,

    elevation: 2,
  },

  detailsText: {
    fontSize: 15,
    color: "#66565b",
    lineHeight: 24,
  },

  backButton: {
    backgroundColor: "#f6a6bb",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 5,
  },

  backButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;