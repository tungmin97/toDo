import {SafeAreaView, StatusBar} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import TaskInput from '../components/TaskInput';
import {TaskProps} from '../types/types';

export default function HomeScreen() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const handleAddTask = (newTitle: string) => {
    if (!newTitle) return;

    const newTask: TaskProps = {
      id: new Date().getTime(),
      title: newTitle,
      isDone: false,
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleTaskDone = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? {...task, isDone: !task.isDone} : task,
      ),
    );
  };

  const handleRemoveTask = (id: number) => {
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
