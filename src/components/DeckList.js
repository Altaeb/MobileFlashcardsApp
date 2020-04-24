import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

class DeckList extends Component {
  render() {
    const { decks } = this.props;
    console.log(this.props);
    return (
        <View style={styles.container}>
          {decks &&
          Object.keys(decks).map(deck => {
            const { title, questions } = decks[deck];
            return (
                <View key={deck}>
                <Text>{title}</Text>
                <Text>{questions.length}</Text>
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