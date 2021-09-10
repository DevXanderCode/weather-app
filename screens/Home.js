import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { TextInput, Button, Card, Title } from "react-native-paper";
import Header from "./layout/Header";

const Home = ({ navigation, route }) => {
  const [info, setInfo] = React.useState({
    name: "loading !!",
    temp: "loading",
    humidity: "0",
    desc: "loading",
    icon: "loading",
  });

  const getWeather = () => {
    const { city } = route?.params;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=0fd5c3dfae61e3978e62cf9c009149d9`,
    )
      .then((res) => res.json())
      .then((data) => {
        const {
          name,
          main: { temp, humidity },
          weather,
        } = data;
        setInfo({
          name,
          temp,
          humidity,
          desc: weather[0].description,
          icon: weather[0].icon,
        });
      })
      .catch((err) => {
        console.log("got this error when trying to get the weather", err);
      });
  };

  React.useEffect(() => {
    getWeather();
  }, [route?.params?.city]);
  return (
    <SafeAreaView>
      <View>
        <Header />
        <View style={styles?.titleContainer}>
          <Title style={styles?.title}>{info?.name}</Title>
          <Image
            style={styles?.img}
            source={{ uri: `https://openweathermap.org/img/w/${info?.icon}.png` }}
          />
        </View>
        <Card style={styles?.card}>
          <Title style={styles?.blueText}>Temperature - {info?.temp}°c</Title>
        </Card>
        <Card style={styles?.card}>
          <Title style={styles?.blueText}>Humidity - {info?.humidity}</Title>
        </Card>
        <Card style={styles?.card}>
          <Title style={styles?.blueText}>Description - {info?.desc}</Title>
        </Card>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    alignItems: "center",
  },
  img: {
    width: 120,
    height: 120,
  },
  title: {
    color: "#00aaff",
    marginTop: 20,
    fontSize: 30,
  },
  card: {
    margin: 5,
    padding: 12,
  },
  blueText: {
    color: "#00aaff",
  },
});

export default Home;
