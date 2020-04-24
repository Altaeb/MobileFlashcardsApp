import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { fetchDecks } from "../utils/API";

class DeckList extends Component {
    state = {
      decks: {}
    };
    componentDidMount() {
      fetchDecks().then(decks => this.setState({ decks }));
  }

  render() {
    const { decks } = this.state;
    return (
      <View>
          {decks &&
          Object.keys(decks).map(deck => {
            const { title, questions } = decks[deck];
            return (
              <View>
                <Text>{title}</Text>
                <Text>{questions.length}</Text>
              </View>
            );
          })}
      </View>
    );
  }
}

export default DeckList;