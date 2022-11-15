import {View, Text, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react';

interface TaskInputProps {
  addTask: (task: string) => void;
}

export default function TaskInput({addTask}: TaskInputProps) {
  const [task, setTask] = useState('');

  const handleNewTask = () => {
    addTask(task);
    setTask('');
  };

  return (
    <View className="p-2 px-3 flex-row items-center bg-slate-700 shadow-lg">
      <TextInput
        value={task}
        placeholder="Add new todo..."
        placeholderTextColor={'#E1E1E6'}
        returnKeyType="send"
        onChangeText={setTask}
        onSubmitEditing={handleNewTask}
        className="flex-1 bg-slate-900 text-slate-300 text-base mr-2 p-3 px-5 border-2 border-slate-500 rounded-3xl"
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        onPress={() => {
          handleNewTask();
          Keyboard.dismiss();
        }}
        className="h-12 w-12 bg-slate-500 rounded-full mx-auto justify-center">
        <Text className="text-center text-slate-300 text-3xl">+</Text>
      </TouchableOpacity>
    </View>
  );
}
