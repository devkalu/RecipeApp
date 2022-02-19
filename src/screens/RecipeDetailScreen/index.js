import React from "react";
import { View, Text, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import styles from "./styles";
import { MEALS } from "../../data/";
import CustomHeaderButton from "../../components/CustomHeaderButton";

const RecipeDetailScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const selectedMeal = MEALS.find((item) => item.id === id);

  return (
    <View style={styles.container}>
      <Text>Recipe Detail Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to First Screen"
        //You can also use navigation.replace('Home') to go Home without the option of a back button this is useful for login screens
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

RecipeDetailScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");
  const selectedMeal = MEALS.find((item) => item.id === id);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("mark as favorite");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default RecipeDetailScreen;
