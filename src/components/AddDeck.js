import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { createDeck } from "../utils/API";
import { addDeck } from "../actions/decks";

class AddDeck extends Component {
    state = {
      text: ""
    };
  
    updateText = text => {
        console.log(text);
        this.setState({ text });
      };
    
    submitDeck = e => {
      e.preventDefault();
      if (this.state.text.trim() === "") {
        return;
      }
      const title = this.state.text;
      const { dispatch } = this.props;
      const deck = {
        [title]: {
          title: title,
          questions: []
        }
      };
  
      createDeck(deck).then(() => {
        dispatch(addDeck(deck));
        this.setState({ text: "" });
      });
    };

  render() {
    return (
        <View style={styles.container}>
        <Text> Add New Deck </Text>
        <Text>Deck Name</Text>
        <TextInput
          onChangeText={text => this.updateText(text)}
        ></TextInput>
        <Button title="Submit" onPress={e => this.submitDeck(e)}></Button>
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
  
  export default connect()(AddDeck);