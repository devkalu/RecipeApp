import React from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from "react-native";

import styles from "./styles";
import ShadowCard from "../ShadowCard";
import DefaultText from "../DefaultText";

const MealItem = ({ item, onSelect }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.container}>
      <ShadowCard style={{ flex: 1 }}>
        <TouchableComponent style={styles.innerContainer} onPress={onSelect}>
          <View>
            <View style={{ ...styles.mealRow, ...styles.headerStyle }}>
              <ImageBackground
                source={{ uri: item.imageUrl }}
                style={styles.bgImage}
              >
                <View style={styles.titleContainer}>
                  <Text style={styles.title} numberOfLines={1}>
                    {item.title}
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ ...styles.mealRow, ...styles.detailStyle }}>
              <Text style={styles.lowerTitle}>{item.duration}m</Text>
              <Text style={styles.lowerTitle}>
                {item.complexity.toUpperCase()}
              </Text>
              <Text style={styles.lowerTitle}>
                {item.affordability.toUpperCase()}
              </Text>
            </View>
          </View>
        </TouchableComponent>
      </ShadowCard>
    </View>
  );
};

export default MealItem;
