import React from "react";
import { View, Text, Button, FlatList } from "react-native";

import styles from "./styles";
import Colors from "../../constants/colors";
import { CATEGORIES, MEALS } from "../../data";
import ListRender from "../../components/ListRender";

const CategoryListScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const mealCategory = MEALS.filter((meal) => meal.catgoryIds.indexOf(id) >= 0);
  const currentCategory = CATEGORIES.find((item) => item.id === id);

  return (
    <View style={styles.container}>
      <ListRender listData={mealCategory} navigation={navigation} />
    </View>
  );
};

//navigation was destructured from navigationData
CategoryListScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");
  const currentCategory = CATEGORIES.find((item) => item.id === id);
  return {
    headerTitle: currentCategory.title,
  };
};

export default CategoryListScreen;
