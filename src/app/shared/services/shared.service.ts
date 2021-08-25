import { Injectable } from '@angular/core';
import { LISTS } from 'src/app/mock-data';
import { TASKS } from 'src/app/mock-data';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Task } from '../models/Task';
import { List } from '../models/List';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  getTasks(): Task[] {
    return TASKS;
  }

  getLists(): List[] {
    return LISTS;
  }

  public drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
