import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Hello from the home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
