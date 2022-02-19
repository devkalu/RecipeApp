import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";

import { MEALS } from "../../data";
import ListRender from "../../components/ListRender";

const FavoritesScreen = ({ navigation }) => {
  const favoriteMeals = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );
  return (
    <View style={styles.container}>
      <ListRender listData={favoriteMeals} navigation={navigation} />
    </View>
  );
};

FavoritesScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Your Favorites",
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
export default FavoritesScreen;
