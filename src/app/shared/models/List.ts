import { Task } from './Task';

export interface List {
  id?: number;
  title: string;
  selected?: boolean;
  tasks?: Task[];
}
