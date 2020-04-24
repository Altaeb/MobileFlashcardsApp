import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import Deck from "./Deck";

class DeckList extends Component {
  render() {
    const { decks } = this.props;
    console.log(this.props);
    const Stack = createStackNavigator();
    return (
        <View style={styles.container}>
          {decks &&
          Object.keys(decks).map(deck => {
            const { title, questions } = decks[deck];
            return (
                <View key={deck}>
                <Text>{title}</Text>
                <Text>{questions.length}</Text>
                <Button
                  title="Go to Details"
                  onPress={() =>
                    this.props.navigation.navigate("Deck", {
                      id: 9,
                      title: title
                    })
                  }
                />
              </View>
            );
          })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    }
  });
  
  export default connect(decks => {
    return {
      decks
    };
  })(DeckList);