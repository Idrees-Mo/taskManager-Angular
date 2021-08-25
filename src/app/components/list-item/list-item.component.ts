import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { List } from 'src/app/shared/models/List';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() list: List;

  constructor(private shareService: SharedService) {}

  ngOnInit(): void {}

  onDrop(event: CdkDragDrop<Task[]>) {
    this.shareService.drop(event);
  }
}
