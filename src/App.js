import React, {useState} from "react"
import {SafeAreaView, View, Text, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity } from "react-native"

import AddTodo from "./components/AddTodo";

const Todo = () => {
  
  const [todos, setTodos] = useState([
    // {text: "buy coffee โ", key: "0" },
    // {text: "clean house ๐งผ", key: "1"},
    // {text: "play guitar ๐ธ", key: "2"}
  ])

  const addNewTodo = (text) => {
    setTodos((todos) => {
      return [
        {text: text, key: Math.floor(Math.random() * 1000).toString()},
        ...todos,
      ]; 
    })
  }

  const deleteTodo = (key) => {
    setTodos((todos) => {
      return todos.filter(todo => todo.key != key);
    });
  }

  const doneTodo = (style) => {
    setTodos((todos) => {
      return console.log("hello");
    });
  }

  



  return (
    <SafeAreaView style={{flex:1, backgroundColor: "#311b92",}}>
      <ScrollView 
        contentInsetAdjustmentBehavior="automatic" 
        style={{flex:1, }}>
        <View>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={styles.header}>TODO</Text>
            <Text style={styles.header}>{todos.length}</Text>
          </View>

          <View>
            <FlatList
              data={todos}
              renderItem={({item}) => (
              <View style={styles.todosBar}>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.todosBarText}>{item.text}</Text>
                </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteTodo(item.key)}>
                    <Image 
                      style={{width: 15, height: 15, margin: 5,}} 
                      source={require("./image/delete-icon.png")}
                      tintColor="#ffb300"
                    />
                  </TouchableOpacity>
              </View>
              )} 
            />
          </View>
        </View>
      </ScrollView>
      <AddTodo addNewTodo={addNewTodo}/>
    </SafeAreaView>
  )
}

export default Todo

const styles = StyleSheet.create({
  header: {
    color: "#ffb300",
    fontSize: 50,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  todosBar: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#5e35b1",
    borderRadius: 10,
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  todosBarText: {
    color: "white", 
    fontSize: 20,
    // textDecorationLine: "line-through",
  },
})