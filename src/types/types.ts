export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Detail: {id: number};
  NotFound: undefined;
};

export interface TaskProps {
  id: number;
  title: string;
  isDone: boolean;
}

export interface BodyProps {
  tasks: TaskProps[];
  onPress: (id: number) => void;
  onHold: (id: number) => void;
}

export interface TaskItemProps {
  item: TaskProps;
  index: number;
  onPress: (id: number) => void;
  onHold: (id: number) => void;
}
