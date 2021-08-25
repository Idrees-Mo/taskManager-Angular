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
      }
      this.tasks.push(result.task);
    });
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
