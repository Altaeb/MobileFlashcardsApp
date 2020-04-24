import React, { Component } from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import DeckList from "./DeckList";
import AddDeck from "./AddDeck";
import Ionicons from "react-native-vector-icons/Ionicons";
import { red, gray } from "../utils/colors";
import handleInitialData from "../actions/shared";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

class Starter extends React.Component {
  state = {};

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const Tab = createBottomTabNavigator();
    return (
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
          <Tab.Screen name="Dec kList" component={DeckList} />
          <Tab.Screen name="Add Deck" component={AddDeck} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default connect()(Starter);