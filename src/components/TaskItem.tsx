import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {DetailScreenNavigationProps, TaskItemProps} from '../types/types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles/styles';
import {useNavigation} from '@react-navigation/native';

export default function TaskItem({
  item,
  index,
  onPress,
  onHold,
}: TaskItemProps) {
  const navigation = useNavigation<DetailScreenNavigationProps>();

  return (
    <ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Details', {data: item})}
        onLongPress={() => onHold(item.id)}
        className={
          item.isDone
            ? 'flex-row items-center bg-slate-700 p-3 rounded-2xl mb-3 opacity-80'
            : 'flex-row items-center bg-slate-600 p-3 rounded-2xl mb-3'
        }>
        <TouchableOpacity onPress={() => onPress(item.id)}>
          <View
            className={
              item.isDone
                ? 'h-5 w-5 bg-slate-500 border-2 border-slate-500 rounded-full mr-5'
                : 'h-5 w-5 border-2 bg-slate-800 border-slate-500 rounded-full mr-5'
            }
          />
        </TouchableOpacity>
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
