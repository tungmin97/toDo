import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {TaskItemProps} from '../types/types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles/styles';

export default function TaskItem({
  item,
  index,
  onPress,
  onHold,
}: TaskItemProps) {
  return (
    <ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onPress(item.id)}
        onLongPress={() => onHold(item.id)}
        className="flex-row items-center bg-slate-600 p-3 rounded-2xl mb-2">
        {item.isDone ? (
          <View className="h-5 w-5 bg-slate-500 border-2 border-slate-500 rounded-full mr-5" />
        ) : (
          <View className="h-5 w-5 border-2 border-slate-500 rounded-full mr-5" />
        )}
        <View className="flex flex-1">
          <Text
            className="font-medium text-lg text-slate-300"
            style={item.isDone && styles.textDone}>
            {item.title}
          </Text>
        </View>
        <TouchableOpacity onPress={() => onHold(item.id)}>
          <MaterialCommunityIcons name="trash-can" size={25} color="#fff" />
        </TouchableOpacity>
      </TouchableOpacity>
    </ScrollView>
  );
}
