import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.tasks = this.sharedService.getTasks();
  }

  onAddTask() {
    console.log('adding new task');
  }
  onRemoveTask() {
    this.tasks = this.tasks.filter((task) => !task.selected);
  }
  onGenrateTask() {
    console.log('genrating tasks');
  }

  onDrop(event: CdkDragDrop<Task[]>) {
    this.sharedService.drop(event);
  }
}
