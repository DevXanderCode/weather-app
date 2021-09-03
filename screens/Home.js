import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button, Card } from "react-native-paper";
import Header from "./layout/Header";

const Home = ({ navigation }) => {
  const [info, setInfo] = React.useState({
    name: "loading !!",
    temp: "loading",
    humidity: "",
    desc: "",
    icon: "loading",
  });

  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=0fd5c3dfae61e3978e62cf9c009149d9`,
    )
      .then((res) => res.json())
      .then((data) => console.log("Logging data", data))
      .catch((err) => {
        console.log("got this error when trying to get the weather", err);
      });
  };

  React.useEffect(() => {
    getWeather();
  }, []);
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
