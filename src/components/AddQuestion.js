import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { addCard } from "../actions/decks";
import { connect } from "react-redux";
import { addQuestion } from "../utils/API";
import { white, blue, purple } from "../utils/colors";

class AddQuestion extends React.Component {
  state = {
    question: "",
    answer: ""
  };


submitQuestion = () => {
    const { question, answer } = this.state;

    if (question.trim() === "" || answer.trim() === "") {
        return;
      }

    const { title } = this.props.route.params;
    const { dispatch, navigation } = this.props;

    addQuestion({
        card: { question, answer },
        deckName: title
    }).then(() => {
    dispatch(
      addCard({
        title,
        question,
        answer
      })
      );
      this.setState({
        question: "",
        answer: ""
      });
      navigation.goBack();
    });

    };
   
  render() {
    const { question, answer } = this.state;

    return (
      <View style={style.container}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Add Question </Text>
        <TextInput
          value={question}
          style={style.input}
          onChangeText={question => this.setState({ question })}
        />
       <Text style={{ fontSize: 16, fontWeight: "bold" }}>The Answer </Text>
        <TextInput
          value={answer}
          style={style.input}
          onChangeText={answer => this.setState({ answer })}
        />

        <TouchableOpacity
          onPress={() => this.submitQuestion()}
          style={style.submitButton}
        >
          <Text style={style.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    paddingTop: 40
  },
  input: {
    width: 300,
    height: 56,
    padding: 12,
    borderWidth: 1,
    borderColor: purple,
    backgroundColor: white,
    borderRadius: 5,
    margin: 16
  },
  submitButton: {
    backgroundColor: blue,
    padding: 12,
    height: 44
  },
  submitText: {
    color: white,
    fontSize: 18,
    textAlign: "center"
  }
});

function mapStateToProps(state) {
  return {
    decks: state
  };
}

export default connect(decks => {
  return {
    decks
  };
})(AddQuestion);