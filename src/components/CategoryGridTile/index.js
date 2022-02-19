import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import styles from "./styles";
import ShadowCard from "../ShadowCard";

const CategoryGridTile = ({ item, navigation }) => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <ShadowCard style={{ flex: 1 }}>
        <TouchableComponent
          style={{ flex: 1 }}
          onPress={navigation.navigate.bind(this, "CategoryList", {
            id: item.id,
          })}
        >
          <View style={{ ...styles.container, backgroundColor: item.color }}>
            <Text style={styles.titleStyle} numberOfLines={2}>
              {item.title}
            </Text>
          </View>
        </TouchableComponent>
      </ShadowCard>
    </View>
  );
};

export default CategoryGridTile;
