// Task.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Task = ({ task, onDelete, onComplete }) => {
  return (
    <View>
      <Text>{task.name}</Text>
      <TouchableOpacity onPress={() => onComplete(task.id)}>
        <Text>Complete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
