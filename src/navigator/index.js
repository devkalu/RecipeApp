import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

//Screen Inputs
import CategoryListScreen from "../screens/CategoryListScreen";
import HomeScreen from "../screens/HomeScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import GroceryListScreen from "../screens/GroceryListScreen";
import FiltersScreen from "../screens/FiltersScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

//Other imports
import Colors from "../constants/colors";
import { Platform } from "react-native";

// default configuration shared by all screens
const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
  },
  headerTintColor: Platform.OS === "ios" ? Colors.primary : "white",
};

const StackRoutes = {
  Home: {
    screen: HomeScreen,
    //another way of sharing navigationOptions
    navigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
      },
      headerTintColor: Platform.OS === "ios" ? Colors.primary : "white",
    },
  },
  CategoryList: CategoryListScreen,
  RecipeDetail: RecipeDetailScreen,
};

const StackRoutConfigs = {
  //if initial routeName isn't provided, react navigation defaults to using the first value pair in Routes
  initialRouteName: "Home",
  //This causes an animation effect to the navigation such that each screen pop from below
  mode: "modal",
  defaultNavigationOptions: defaultNavigationOptions,
};

const StackNavigator = createStackNavigator(StackRoutes, StackRoutConfigs);

const FavoritesStackNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    RecipeDetail: RecipeDetailScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  }
);
const GroceryStackNavigator = createStackNavigator(
  {
    GroceryList: GroceryListScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

const BottomTabRoutes = {
  //This includes the stackNaviagtor, thus can serve as the main navigator for our current app
  Home: {
    screen: StackNavigator,
    navigationOptions: {
      //to override the tab label
      //tabBarLabel: "All",
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
    },
  },
  GroceryList: {
    screen: GroceryStackNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialIcons
            name="add-shopping-cart"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },
  Favorites: {
    screen: FavoritesStackNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
    },
  },
};

const BottomTabRouteConfig = {
  tabBarOptions: {
    activeTintColor: Colors.primary,
  },
};
const TabNavigator = createBottomTabNavigator(
  BottomTabRoutes,
  BottomTabRouteConfig
);

const FilterStackNavigator = createStackNavigator(
  {
    Filters: {
      screen: FiltersScreen,
      navigationOptions: {},
    },
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  }
);
//Main Navigation, all other navigation are nested withing this navigation
const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        // drawerLabel: "Meals",
      },
    },
    Filters: FilterStackNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
      labelStyle: {
        fontFamily: "poppins-bold",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
