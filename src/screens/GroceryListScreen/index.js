import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";

const GroceryListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Grocery List Screen</Text>
    </View>
  );
};

GroceryListScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Your Grocery List",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

export default GroceryListScreen;
