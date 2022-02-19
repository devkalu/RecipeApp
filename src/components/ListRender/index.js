import React from "react";
import { Text, View, FlatList } from "react-native";

import styles from "./styles";
import MealItem from "../MealItem";

const ListRender = ({ navigation, listData }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        renderItem={({ item }) => (
          <MealItem
            item={item}
            onSelect={() => {
              navigation.navigate("RecipeDetail", { id: item.id });
            }}
          />
        )}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default ListRender;
