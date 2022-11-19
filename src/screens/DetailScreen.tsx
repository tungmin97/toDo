import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {DetailScreenProps} from '../types/types';
import dayjs from 'dayjs';

export default function DetailScreen({navigation, route}: DetailScreenProps) {
  const title = route.params.data.title;
  const isDone = route.params.data.isDone;
  const createAt = dayjs(route.params.data.createAt).format('MMM DD, YYYY');
  return (
    <>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
        <View className="h-2/3" />
      </TouchableWithoutFeedback>
      <View className="h-1/3 w-full bg-slate-600 absolute bottom-0 rounded-t-2xl p-4">
        <View>
          <Text className="text-center text-zinc-200 font-bold text-xl mb-3">
            Task Details
          </Text>
          <View className="h-px bg-slate-400 mb-5" />
        </View>
        <View className="flex-1 mb-5">
          <Text className="flex-1 text-center font-medium text-3xl text-zinc-100">
            {title}
          </Text>
          <View className="flex-row justify-between">
            <View className="gap-3">
              <Text className="uppercase text-zinc-300">Created</Text>
              <Text className="font-medium text-zinc-300">{createAt}</Text>
            </View>
            <View className="gap-3">
              <Text className="uppercase text-zinc-300">Status</Text>
              <Text className="font-medium text-zinc-300">
                {isDone ? 'Completed' : 'Pending'}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View className="h-10 w-1/4 bg-slate-800 rounded-lg justify-center items-center mx-auto">
            <Text className="text-zinc-400">Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
