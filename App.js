import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Home from "./screens/Home";
// Screens
import Search from "./screens/Search";

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor="#00aaff"
      />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tarBarIcon: ({ color }) => {
              let iconName;

              if (route?.name === "home") {
                iconName = "";
              } else if (route?.name === "search") {
                iconName = "";
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: "white",
            inactiveTintColor: "gray",
          }}>
          <Tab.Screen name="home" component={Home} />
          <Tab.Screen name="search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
