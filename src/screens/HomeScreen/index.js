import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";

//Local
import styles from "./styles";
import { CATEGORIES } from "../../data";
import CategoryGridTile from "../../components/CategoryGridTile";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        //keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryGridTile navigation={navigation} item={item} />
        )}
      />
    </View>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Food Recipe App",
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

export default HomeScreen;
