import {View, Text} from 'react-native';
import React from 'react';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
export default function Header() {
  const now = dayjs();
  dayjs.extend(weekday);
  return (
    <View className="basis-1/5 p-5 flex-row gap-2 items-center">
      <View>
        <Text className="font-bold text-6xl text-slate-100">{now.date()}</Text>
      </View>
      <View className="-top-1.5">
        <Text className="font-medium text-lg text-slate-300">
          {now.format('dddd')}
        </Text>
        <Text className="font-medium text-lg text-slate-300">
          {now.format('MMM, YYYY')}
        </Text>
      </View>
    </View>
  );
}
