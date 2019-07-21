import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      todo: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.renderTodos = this.renderTodos.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo() {
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({
      todo: arr,
      text: ""
    });
  }

  renderTodos() {
    return this.state.todo.map(t => {
      return (
        <View>
          <TouchableOpacity key={t}>
            <Text key={t} style={styles.todo} onPress={this.removeTodo}>
              {t}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
  }

  removeTodo(t) {
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos, 1);
    this.setState({ todo: arr });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewStyle}>
          <Text style={styles.header}>Notes App</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={text => {
              this.setState({ text });
            }}
            value={this.state.text}
          />
          <Button title="Add Todo" color="blue" onPress={this.addTodo} />
          <View style={{ marginTop: 100 }} />
          {this.renderTodos()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ca03fc"
  },

  viewStyle: {
    textAlign: "center",
    margin: 10,
    marginTop: 30
  },
  inputStyle: {
    height: 40,
    borderWidth: 1,
    borderColor: "white"
  },
  header: {
    fontSize: 30,
    padding: 50,
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  },

  todo: {
    fontSize: 24,
    color: "white",
    textAlign: "center"
  }
});

export default App;
