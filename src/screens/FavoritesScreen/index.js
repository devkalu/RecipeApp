import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";

import ListRender from "../../components/ListRender";

const FavoritesScreen = ({ navigation }) => {
  const availableMeals = useSelector((state) => state.meal.favoriteMeals);

  return (
    <View style={styles.container}>
      <ListRender listData={availableMeals} navigation={navigation} />
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
