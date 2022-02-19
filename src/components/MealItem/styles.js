import { StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: "100%",
    backgroundColor: Colors.accent,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    marginVertical: 10,
  },
  mealRow: {
    flexDirection: "row",
  },
  innerContainer: {},
  title: {
    fontFamily: "poppins-bold",
    fontSize: 18,
    color: "white",

    textAlign: "center",
  },
  headerStyle: {
    height: "90%",
  },
  detailStyle: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
  },
  lowerTitle: {
    fontFamily: "poppins-light",
    color: Colors.secondary,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});

export default styles;
