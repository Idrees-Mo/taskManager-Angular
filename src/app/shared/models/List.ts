import { Task } from './Task';

export interface List {
  id?: number;
  title: string;
  tasks?: Task[];
}
