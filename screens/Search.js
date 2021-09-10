import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "./layout/Header";

const Search = ({ navigation }) => {
  const [city, setCity] = React.useState("");
  const [cities, setCities] = React.useState([]);
  // TODO: work on autocomplete feature for cities
  // const fetchCities = (text) => {
  //     setCity(text);
  //     const Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
  //     const key = '3391202a7f6bf033452159e8ded11864:0281c844803cda4ac64aae779ed64c3a'.toString()
  //     const auth_key = Base64.encode(key)

  //     // fetch(`http://autocomplete.wunderground.com/aq?query=${text}&cb=displayCities`)
  //     // // fetch(`https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${text}`, {
  //     // //     headers: {
  //     // //         authorization: `Basic ${auth_key}`
  //     // //     }
  //     // // })
  //     // .then(res => {console.log("Logging res", res)})
  //     // .then(cityData => console.log("Logging city Data", cityData))
  //     // .catch(error => {
  //     //     console.log("got this error when i tried to get a list of cities", error)
  //     // });

  //     fetch(`http://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&offset=0&namePrefix=${text}`, {
  //         "method": "GET",
  //     })
  //     .then(response => {
  //         console.log(response);
  //     })
  //     .catch(err => {
  //         console.error(err);
  //     });

  // };

  const btnClick = async () => {
    await AsyncStorage?.setItem("newCity", city);
    navigation?.navigate("home", { city });
  };

  const listClick = async (cityName) => {
    await AsyncStorage?.setItem("newCity", cityName);
    setCity(cityName);
    navigation?.navigate("home", { city: cityName });
  };

  return (
    <View style={styles?.container}>
      <Header name="Search Screen" />
      <TextInput
        label="City Name"
        value={city}
        theme={theme}
        onChangeText={(text) => setCity(text)}
      />
      <Button
        mode="contained"
        theme={theme}
        icon="content-save"
        style={styles?.btn}
        labelStyle={styles?.btnText}
        onPress={() => {
          btnClick();
        }}>
        Search
      </Button>
    </View>
  );
};

const theme = { colors: { primary: "#00aaff" } };

const styles = StyleSheet.create({
  container: {},
  btn: {
    margin: 20,
  },
  btnText: {
    color: "white",
  },
});

export default Search;
