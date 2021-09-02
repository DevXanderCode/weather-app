import React from 'react';
import { Appbar, Title } from 'react-native-paper';
import { View, Text } from 'react-native';

const Header = () => {

  return (
    <Appbar.Header theme={{colors: {primary: "#00aaff"}}}>
     <Title>Weather App</Title>
    </Appbar.Header>
  );
};

export default Header;
