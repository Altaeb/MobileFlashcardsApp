import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

class Deck extends React.Component {
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
          onPress={() => {
            this.props.navigation.navigate("NewQuestion", {
              title,
              questions
            });
          }}
          style={styles.addCard}
        >
          <Text style={styles.addCardTitle}>Add Card</Text>
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
    paddingTop: 20
  },
  addCard: {
    backgroundColor: "#fff",
    margin: 24,
    padding: 10,
    borderRadius: 7,
    height: 45
  },
  startQuiz: {
    backgroundColor: "#000",
    margin: 24,
    padding: 10,
    height: 45,
    borderRadius: 2
  },
  addCardTitle: {
    color: "#000",
    fontSize: 22,
    textAlign: "center"
  },
  startQuizTitle: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center"
  }
});

export default connect(decks => {
    decks
  };
})(Deck);