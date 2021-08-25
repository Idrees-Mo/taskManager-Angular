import { Component, OnInit } from '@angular/core';
import { LISTS } from 'src/app/mock-data';
import { List } from 'src/app/shared/models/List';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  lists: List[] = LISTS;

  constructor() {}

  ngOnInit(): void {}
}
