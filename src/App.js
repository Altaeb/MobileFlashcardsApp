import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import middleware from "./middlewares";
import Starter from "./components/Starter";

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <Starter />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;