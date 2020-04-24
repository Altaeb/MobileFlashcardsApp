import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DeckList from "./components/DeckList";
import AddDeck from "./components/AddDeck";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <Provider store={createStore(reducer)}>
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
            activeTintColor: "blue",
            inactiveTintColor: "gray"
          }}
        >
          <Tab.Screen name="Dec kList" component={DeckList} />
          <Tab.Screen name="Add Deck" component={AddDeck} />
        </Tab.Navigator>
      </NavigationContainer>
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
