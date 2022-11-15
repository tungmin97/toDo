import {View, Text} from 'react-native';
import React from 'react';

export default function TaskEmpty() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="flex-1 font-medium text-2xl text-slate-400">
        Maybe try adding some...
      </Text>
    </View>
  );
}
