import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { List } from 'src/app/shared/models/List';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ListDialogComponent } from '../list-dialog/list-dialog.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  lists: List[];

  constructor(
    private sharedService: SharedService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.lists = this.sharedService.getLists();
  }

  onAddList(): void {
    const dialogRef = this.dialog.open(ListDialogComponent, {
      width: '270px',
      data: {
        list: {},
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'cancelled') {
        return;
      }
      this.lists.push({ ...result.list, tasks: [] });
    });
  }

  onRemoveList() {
    this.lists = this.lists.filter((list) => !list.selected);
  }
}
