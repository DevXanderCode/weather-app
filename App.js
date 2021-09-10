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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// Screens
import Home from "./screens/Home";
import Search from "./screens/Search";

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor="#00aaff"
      />
      {/* <Home /> */}
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName;

              if (route?.name === "home") {
                iconName = "home-city-outline";
              } else if (route?.name === "search") {
                iconName = "city";
              }

              return <MaterialCommunityIcons name={iconName} color={color} size={32} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "red",
            inactiveTintColor: "gray",
          }}
          initialRouteName="home">
          <Tab.Screen name="home" component={Home} />
          <Tab.Screen name="search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
