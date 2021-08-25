import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-data';
import { SharedService } from 'src/app/services/shared.service';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  onDrop(event: CdkDragDrop<Task[]>) {
    this.sharedService.drop(event);
  }
}
