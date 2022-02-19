import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";

const FilterScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Filter Screen</Text>
    </View>
  );
};

FilterScreen.navigationOptions = ({ navigation }) => {
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
  };
};
export default FilterScreen;
