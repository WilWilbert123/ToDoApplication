// TaskList.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onComplete }) => {
  return (
    <View>
      <Text>Total Tasks: {tasks.length}</Text>
      <Text>Completed Tasks: {tasks.filter(task => task.completed).length}</Text>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => (
          <Task task={item} onDelete={onDelete} onComplete={onComplete} />
        )}
      />
    </View>
  );
};

export default TaskList;
