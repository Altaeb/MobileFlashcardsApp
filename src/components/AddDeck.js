import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
  } from "react-native";
import { connect } from "react-redux";
import { createDeck } from "../utils/API";
import { addDeck } from "../actions/decks";
import { white, purple } from "../utils/colors";

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
      const { dispatch, navigation } = this.props;
      const deck = {
        [title]: {
          title: title,
          questions: []
        }
      };
  
      createDeck(deck).then(() => {
        dispatch(addDeck(deck));
        this.setState({ text: "" });
        navigation.navigate("Dec kList");
      });
    };

  render() {
    return (
        <View style={styles.container}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Write the title of the new deck{" "}
        </Text>
        <TextInput
         style={styles.input}
          onChangeText={text => this.updateText(text)}
          value={this.state.text}
        ></TextInput>
        <TouchableOpacity
          title="Submit"
          onPress={e => this.submitDeck(e)}
          style={styles.submitBtn}
        >
          <Text style={{ color: white, fontSize: 18, textAlign: "center" }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: white,
      alignItems: "center",
      justifyContent: "center"
    },
    input: {
      width: 300,
      height: 40,
      padding: 12,
      borderWidth: 1,
      borderColor: purple,
      backgroundColor: white,
      borderRadius: 5,
      margin: 16
    },
    submitBtn: {
      backgroundColor: purple,
      margin: 20,
      marginTop: 0,
      padding: 10,
      borderRadius: 7,
      height: 45,
      width: 200
    },
    submitText: {
      color: white,
      fontSize: 18,
      textAlign: "center"
    }
  });
  
  export default connect()(AddDeck);