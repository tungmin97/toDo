import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {BodyProps} from '../types/types';
import TaskItem from './TaskItem';
import TaskEmpty from './TaskEmpty';

export default function Body({tasks, onPress, onHold}: BodyProps) {
  return (
    <View className="flex-1 p-5 items-center">
      <View className="flex-row w-full justify-between mb-3 p-1">
        <View className="flex-row items-center">
          <Text className="font-medium text-lg text-slate-300">Totals</Text>
          <View className="bg-slate-300 h-7 w-7 rounded-full items-center justify-center ml-2">
            <Text className="text-slate-800 font-medium text-lg">
              {tasks.length}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center">
          <Text className="font-medium text-lg text-slate-300">Completed</Text>
          <View className="bg-slate-300 h-7 w-7 rounded-full items-center justify-center ml-2">
            <Text className="text-slate-800 font-medium text-lg">
              {tasks.filter(task => task.isDone).length}
            </Text>
          </View>
        </View>
      </View>
      <FlatList
        className="flex w-full"
        data={tasks}
        ListEmptyComponent={TaskEmpty}
        renderItem={({item, index}) => (
          <TaskItem
            item={item}
            index={index}
            onPress={onPress}
            onHold={onHold}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
