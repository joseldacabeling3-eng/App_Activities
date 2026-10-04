import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 25,
  },

  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },

  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },

  addButton: {
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginLeft: 10,
    borderRadius: 10,
  },

  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  list: {
    paddingBottom: 20,
  },

  movieItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  movieInfo: {
    flex: 1,
  },

  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },

  watchedMovie: {
    textDecorationLine: "line-through",
    color: "#888",
  },

  status: {
    fontSize: 13,
    color: "#777",
    marginTop: 5,
  },

  deleteButton: {
    backgroundColor: "#e53935",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 10,
  },

  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },

  emptyContainer: {
    alignItems: "center",
    padding: 30,
  },

  emptyText: {
    fontSize: 16,
    color: "#888",
  },

  footer: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },

  counter: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
});

export default styles;