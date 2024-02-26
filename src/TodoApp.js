//TodoApp.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo, setPriority } from './store/actions/todoActions';

const TodoApp = ({ todos, addTodo, deleteTodo, toggleTodo, setPriority }) => {
  const [task, setTask] = useState('');

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      addTodo({
        id: new Date().getTime().toString(),
        task,
        completed: false,
        priority: 1,
      });
      setTask('');
    }
  };

  return (
    <View>
      <Text>Todo App</Text>
      <TextInput
        placeholder="Add a task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add" onPress={handleAddTodo} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.task}</Text>
            <Button title="Delete" onPress={() => deleteTodo(item.id)} />
            <Button title="Toggle" onPress={() => toggleTodo(item.id)} />
            <TextInput
              placeholder="Priority"
              value={item.priority.toString()}
              keyboardType="numeric"
              onChangeText={(text) => setPriority({ id: item.id, priority: parseInt(text) })}
            />
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

export default connect(mapStateToProps, { addTodo, deleteTodo, toggleTodo, setPriority })(TodoApp);
