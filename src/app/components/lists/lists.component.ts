import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/shared/models/List';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  lists: List[];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.lists = this.sharedService.getLists();
  }

  onRemoveList() {
    this.lists = this.lists.filter((list) => !list.selected);
  }
}
