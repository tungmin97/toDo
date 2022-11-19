// import type {StackScreenProps} from '@react-navigation/stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Details: {data: TaskProps};
  NotFound: undefined;
};

export interface TaskProps {
  id: string;
  title: string;
  isDone: boolean;
  createAt: number;
}

export interface BodyProps {
  tasks: TaskProps[];
  onPress: (id: string) => void;
  onHold: (id: string) => void;
}

export interface TaskItemProps {
  item: TaskProps;
  index: number;
  onPress: (id: string) => void;
  onHold: (id: string) => void;
}

// export type RootStackScreenProps<T extends keyof RootStackParamList> =
//   StackScreenProps<RootStackParamList, T>;

export type Props = NativeStackScreenProps<RootStackParamList>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;

export type DetailScreenNavigationProps = DetailScreenProps['navigation'];
