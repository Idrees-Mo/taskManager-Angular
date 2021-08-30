import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Task } from 'src/app/shared/models/Task';

import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(
    private sharedService: SharedService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.tasks = this.sharedService.getTasks();
  }

  onAddTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task: {},
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'cancelled') {
        return;
      } else if (Object.keys(result.task).length === 0) {
        alert('title is required');
        return;
      }
      this.tasks.push(result.task);
    });
  }
  onRemoveTask() {
    this.tasks = this.tasks.filter((task) => !task.selected);
  }
  onGenrateTask() {
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    let chaactersLength = characters.length;

    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * chaactersLength));
    }
    this.tasks.push({ title: result });
  }

  onDrop(event: CdkDragDrop<Task[]>) {
    this.sharedService.drop(event);
  }
}
