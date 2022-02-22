import React, { useEffect, useCallback } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import DefaultText from "../../components/DefaultText";
import styles from "./styles";
import CustomHeaderButton from "../../components/CustomHeaderButton";

import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../../store/action";

const ListItem = ({ children, style }) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  );
};

const RecipeDetailScreen = ({ navigation }) => {
  const availableMeals = useSelector((state) => state.meal.meals);
  const id = navigation.getParam("id");
  const currentMealsIsFavorite = useSelector((state) =>
    state.meal.favoriteMeals.some((meal) => meal.id === id)
  );
  const selectedMeal = availableMeals.find(
    (selectedMeal) => selectedMeal.id === id
  );

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(selectedMeal.id));
  }, [dispatch, id]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
    // navigation.setParams({ mealsTitle: selectedMeal.title });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({ isFav: currentMealsIsFavorite });
  }, [currentMealsIsFavorite]);

  return (
    <ScrollView>
      <View style={styles.innerContainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />

        <View style={styles.detail}>
          <Text style={styles.lowerTitle}>{selectedMeal.duration}m</Text>

          <Text style={styles.lowerTitle}>
            {selectedMeal.complexity.toUpperCase()}
          </Text>
          <Text style={styles.lowerTitle}>
            {selectedMeal.affordability.toUpperCase()}
          </Text>
        </View>
        <Text style={styles.title}>Ingredient</Text>

        {selectedMeal.ingredients.map((ingredient) => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}

        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map((ingredient) => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

RecipeDetailScreen.navigationOptions = ({ navigation }) => {
  // const id = navigation.getParam("id");
  const mealTitle = navigation.getParam("mealTitle");
  const toggleFavorite = navigation.getParam("toggleFav");
  const isFav = navigation.getParam("isFav");
  // const selectedMeal = MEALS.find((item) => item.id === id);
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFav ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

export default RecipeDetailScreen;
