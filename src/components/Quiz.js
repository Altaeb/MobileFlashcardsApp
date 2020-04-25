import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
    red,
    purple,
    green,
    orange,
    white,
    blue,
    black
  } from "../utils/colors";

class Quiz extends React.Component {
  state = {
    questionIndex: 0,
    correctAnswers: 0,
    showAnswer: false
  };

  onCorrect = () => {
    const { questionIndex, correctAnswers } = this.state;
    this.setState({
      questionIndex: questionIndex + 1,
      correctAnswers: correctAnswers + 1,
      showAnswer: false
    });
  };

  startQuiz = () => {
    this.setState({
      questionIndex: 0,
      correctAnswers: 0,
      showAnswer: false
    });
  };

  backToDeck = () => {
    this.props.navigation.goBack();
  };

  onIncorrect = () => {
    this.setState({ questionIndex: this.state.questionIndex + 1 });
  };

  showAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  };

  render() {
    const { questionIndex, correctAnswers, showAnswer } = this.state;
    const { questions } = this.props.route.params;

    const questionLeft = questions.length - questionIndex;

    return (
      <View style={styles.container}>
        {questions.length == 0 ? (
          <View>
            <Text>Sorry This Card does't have questions!!</Text>
          </View>
        ) : questionIndex < questions.length ? (
          <View style={styles.container}>
            <View
              style={{ justifyContent: "flex-start", flex: 1, paddingTop: 20 }}
            >
              <View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Question: {questionLeft} of {questions.length}:{" "}
                </Text>
              </View>
            </View>

            <View style={{ flex: 3 }}>
              <View>
                <View style={{ alignItems: "center" }}>
                <Text
                    style={{
                      fontSize: 20,

                      alignItems: "center",
                      color: black
                    }}
                  >
                    {questions[questionIndex].question} ?
                  </Text>

                  <TouchableOpacity onPress={this.showAnswer}>
                    <Text style={styles.showAnswer}>
                      {" "}
                      {showAnswer ? "Hide Answer" : "Show Answer"}
                    </Text>
                  </TouchableOpacity>
                </View>

                {showAnswer && (
                  <View style={{ alignItems: "center", paddingTop: 20 }}>
                    <Text style={{ fontSize: 20, color: purple }}>
                      {questions[questionIndex].answer}
                    </Text>
                  </View>
                )}
              </View>
            </View>

            <View
              style={{
                justifyContent: "space-around",
                flex: 2
              }}
            >
              <View
                style={[styles.container, { justifyContent: "flex-start" }]}
              >
                <TouchableOpacity
                  style={[styles.btnBox, { backgroundColor: green }]}
                  onPress={this.onCorrect}
                >
                  <Text style={[styles.btnText, { color: white }]}>
                    Correct
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.incorrectrBtn}
                  onPress={this.onIncorrect}
                >
                  <Text style={[styles.btnText, { color: white }]}>
                    Incorrect
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  flex: 1,
                  justifyContent: "center",
                  paddingTop: 90,
                  fontSize: 20,
                  fontWeight: "bold"
                }}
              >
                Score: {correctAnswers}
              </Text>
              <View style={styles.container}>
                <TouchableOpacity
                  style={[
                    styles.btnBox,
                    {
                      backgroundColor: white,
                      borderWidth: 2,
                      borderStyle: "solid",
                      borderColor: blue
                    }
                  ]}
                  onPress={this.startQuiz}
                >
                  <Text style={[styles.btnText, { color: blue }]}>
                    Start Quiz
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btnBox, { backgroundColor: purple }]}
                  onPress={this.backToDeck}
                >
                  <Text style={[styles.btnText, { color: white }]}>
                    Back to Deck
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.container}></View>
          </View>
        )}
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

  showAnswer: {
    paddingTop: 20,
    fontSize: 16,
    color: orange
  },

  btnBox: {
    height: 35,
    width: 200,
    padding: 20,
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 7
  },
  incorrectrBtn: {
    height: 35,
    width: 200,
    padding: 20,
    justifyContent: "center",
    backgroundColor: red,
    marginBottom: 20,
    borderRadius: 7
  },
  btnText: {
    paddingBottom: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    borderRadius: 7
  }
});

export default Quiz;