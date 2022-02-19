import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
  gridItem: {
    flex: 11,
    margin: 15,
    height: 150,
    borderRadius: 10,
    // overflow: "hidden",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  titleStyle: {
    color: "white",
    fontFamily: "poppins-bold",
    fontSize: 22,
    textAlign: "right",
  },
});

export default styles;
