import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Switch } from "react-native";
import styles from "./styles";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import colors from "../../constants/colors";

const FilterSwitch = ({ label, state, onChange }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        value={state}
        onValueChange={onChange}
        trackColor={{ true: colors.primary }}
        thumbColor={colors.accent}
      />
    </View>
  );
};

const FilterScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVeganFree, setIsVeganFree] = useState(false);
  const [isVegetarianFree, setIsVegetarianFree] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      veganFree: isVeganFree,
      vegetarianFree: isVegetarianFree,
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVeganFree, isVegetarianFree]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten Free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose Free"
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan Free"
        state={isVeganFree}
        onChange={(newValue) => setIsVeganFree(newValue)}
      />
      <FilterSwitch
        label="Vegetarian Free"
        state={isVegetarianFree}
        onChange={(newValue) => setIsVegetarianFree(newValue)}
      />
    </View>
  );
};

FilterScreen.navigationOptions = ({ navigation }) => {
  const saved = navigation.getParam("save");
  return {
    headerTitle: "Filtered Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Save" iconName="ios-save" onPress={saved} />
      </HeaderButtons>
    ),
  };
};
export default FilterScreen;
