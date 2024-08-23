import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

const initialTodos = [
  { id: '1', name: "Buy groceries" },
  { id: '2', name: "Finish report" }
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');
  const [editTitle, setEditTitle] = useState(false);
  const [title, setTitle] = useState('My Todo List');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now().toString(), name: newTodo.trim() }]);
      setNewTodo('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item.name}</Text>
      <TouchableOpacity onPress={() => removeTodo(item.id)} style={styles.deleteButton}>
        <Ionicons name="trash-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        <TouchableOpacity onPress={() => setEditTitle(editing => !editing)}>
          {editTitle ? (
            <TextInput
              style={styles.title}
              value={title}
              onChangeText={setTitle}
              onSubmitEditing={() => setEditTitle(false)}
              autoFocus
            />
          ) : (
            <Text style={styles.title}>{title}</Text>
          )}
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Enter your todo here...'
            placeholderTextColor='#ecf0f1'
            value={newTodo}
            onChangeText={setNewTodo}
            onSubmitEditing={addTodo}
          />
          <TouchableOpacity onPress={addTodo} style={styles.addButton}>
            <Ionicons name="add" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.list}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight + 40: 0,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#ecf0f1',
    textAlign: 'start',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#34495e',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#fff',
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#3498db',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  list: {
    flex: 1,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#34495e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  todoText: {
    fontSize: 18,
    color: '#ecf0f1',
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
  },
});