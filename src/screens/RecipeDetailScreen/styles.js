import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
  },

  detail: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  lowerTitle: {
    fontFamily: "poppins-bold",
  },
  title: {
    fontFamily: "poppins-bold",
    textAlign: "center",
    fontSize: 22,
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    padding: 10,
    borderWidth: 1,
  },
});

export default styles;
