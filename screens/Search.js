import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../layout/Header";

const Search = () => {
    return(
        <View style={styles?.container}>
            <Header />
            <Text>
                Hello from the search component
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Search;