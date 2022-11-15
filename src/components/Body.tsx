import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {BodyProps} from '../types/types';
import TaskItem from './TaskItem';
import TaskEmpty from './TaskEmpty';

export default function Body({tasks, onPress, onHold}: BodyProps) {
  return (
    <View className="flex-1 p-5 items-center">
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
