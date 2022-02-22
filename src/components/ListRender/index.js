import React from "react";
import { Text, View, FlatList } from "react-native";

import { useSelector } from "react-redux";

import styles from "./styles";
import MealItem from "../MealItem";

const ListRender = ({ navigation, listData }) => {
  const favoriteMeals = useSelector((state) => state.meal.favoriteMeals);
  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        renderItem={({ item }) => (
          <MealItem
            item={item}
            onSelect={() => {
              navigation.navigate("RecipeDetail", {
                id: item.id,
                mealTitle: item.title,
                isFav: favoriteMeals.find((meal) => meal.id === item.id),
              });
            }}
          />
        )}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default ListRender;
