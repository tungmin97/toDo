import {SafeAreaView, StatusBar, Alert} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import TaskInput from '../components/TaskInput';
import {TaskProps} from '../types/types';
import 'react-native-get-random-values';
import {nanoid} from 'nanoid';
import dayjs from 'dayjs';

export default function HomeScreen() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const handleAddTask = (newTitle: string) => {
    if (!newTitle.trim()) {
      Alert.alert(
        'Invalid input',
        "You weren't supposed to add an empty task :(",
      );
      return;
    }

    const newTask: TaskProps = {
      id: nanoid(),
      title: newTitle,
      isDone: false,
      createAt: dayjs().valueOf(),
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleTaskDone = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? {...task, isDone: !task.isDone} : task,
      ),
    );
  };

  const handleRemoveTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-800 pt-5">
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        animated={true}
        barStyle={'light-content'}
      />
      <Header />
      <Body tasks={tasks} onPress={handleTaskDone} onHold={handleRemoveTask} />
      <TaskInput addTask={handleAddTask} />
    </SafeAreaView>
  );
}
