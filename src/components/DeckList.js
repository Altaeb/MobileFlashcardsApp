import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import {
    TouchableOpacity,
    FlatList,
    ScrollView
  } from "react-native-gesture-handler";
  
  function Decks({ title, length }) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        <View
          style={{
            width: 30,
            height: 20,
            backgroundColor: "#e332",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ alignSelf: "center", fontWeight: "400" }}>{length}</Text>
        </View>
      </View>
    );
  }
class DeckList extends Component {
  render() {
    const { decks } = this.props;
    console.log(this.props);
    const Stack = createStackNavigator();
    return (
        <View style={styles.container}>
           <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 15
          }}
        >
          <Text>Title </Text>
          <Text>Cards </Text>
        </View>

        <ScrollView style={[styles.container]}>
          {decks &&
            Object.keys(decks).map(deck => {
              const { title, questions } = decks[deck];
              return (
                <TouchableOpacity
                key={deck}
                  style={{
                    paddingLeft: 10,
                    margin: 5,
                    backgroundColor: "#d0c9f122"
                  }}
                  onPress={() =>
                    this.props.navigation.navigate("Deck View", {
                      title: title
                    })
                  }
                  >
                  <Decks key={deck} title={title} length={questions.length} />
                  <Decks title={title} length={questions.length} />
                </TouchableOpacity>
              );
            })}
        </ScrollView> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    }
  });
  
  export default connect(decks => {
    return {
      decks
    };
  })(DeckList);