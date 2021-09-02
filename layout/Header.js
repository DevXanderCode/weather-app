import React from 'react';
import { Appbar, Title } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({name = "Weather App"}) => {

  return (
    <Appbar.Header theme={{colors: {primary: "#00aaff"}}} style={styles?.Header}>
     <Title style={styles?.titleStyle}>{name}</Title>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    color: "white"
  },
  Header: {
    flexDirection: "row",
    justifyContent: "center"
  }
})

export default Header;
