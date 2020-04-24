import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DeckList from "./components/DeckList";
import AddDeck from "./components/AddDeck";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        <AddDeck />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
