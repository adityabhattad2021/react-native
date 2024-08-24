import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,

} from 'react-native';

import { Ionicons } from '@expo/vector-icons';


export default function TodoItem({item,removeTodo}) {
    return (
        <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.name}</Text>
            <TouchableOpacity onPress={() => removeTodo(item.id)} style={styles.deleteButton}>
                <Ionicons name="trash-outline" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
})