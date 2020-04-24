import React, { Component } from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DeckList from "./DeckList";
import AddDeck from "./AddDeck";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { red, gray } from "../utils/colors";
import handleInitialData from "../actions/shared";
import DeckView from "./DeckView";
import { createStackNavigator } from "@react-navigation/stack";
import AddQuestion from "./AddQuestion";
import Quiz from "./Quiz";

const DeckStack = createStackNavigator();

function DeckStackScreen() {
  return (
    <DeckStack.Navigator>
      <DeckStack.Screen
        name="DeckList"
        component={DeckList}
        options={{ title: "Decks List" }}
      />
      <DeckStack.Screen name="Deck View" component={DeckView} />
      <DeckStack.Screen name="Add Card" component={AddQuestion} />
      <DeckStack.Screen name="Quiz" component={Quiz} />
    </DeckStack.Navigator>
  );
}

class Starter extends React.Component {
  state = {};

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const Tab = createBottomTabNavigator();

    return (
       <React.Fragment>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Dec kList") {
                  iconName = "ios-pricetags";
                } else {
                  iconName = "ios-add";
                }
                return <Ionicons name={iconName} />;
              }
            })}
            tabBarOptions={{
              activeTintColor: red,
              inactiveTintColor: gray
            }}
          >
            <Tab.Screen name="Dec kList" component={DeckStackScreen} />
            <Tab.Screen name="Add Deck" component={AddDeck} />
          </Tab.Navigator>
        </NavigationContainer>
      </React.Fragment>
    );
  }
}

export default connect()(Starter);