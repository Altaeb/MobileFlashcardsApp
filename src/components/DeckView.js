import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { blue, purple, white } from "../utils/colors";

class DeckView extends React.Component {
  render() {
    let { title } = this.props.route.params;
    const questions =
      this.props.decks[title] && this.props.decks[title].questions;
    console.log(this.props.route.params);

    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 36 }}>{title}</Text>
          <Text style={{ fontSize: 22, marginTop: 12 }}>
            {questions.length} cards
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: white,
            margin: 20,
            padding: 10,
            borderWidth: 2,
            borderStyle: "solid",
            borderRadius: 7,
            height: 45,
            borderColor: blue
          }}
          onPress={() => {
            this.props.navigation.navigate("Add Card", {
              title,
              questions
            });
          }}
        >
          <Text style={[styles.startQuizTitle, { color: blue }]}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Quiz", {
              title,
              questions
            });
          }}
          style={styles.startQuiz}
        >
          <Text style={styles.startQuizTitle}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingTop: 20
  },
  startQuiz: {
    backgroundColor: purple,
    margin: 20,
    marginTop: 0,
    padding: 10,
    borderRadius: 7,
    height: 45
  },
  addCardTitle: {
    color: blue,
    fontSize: 22,
    textAlign: "center"
  },
  startQuizTitle: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  }
});

export default connect(decks => {
  return {
    decks
  };
})(DeckView);
