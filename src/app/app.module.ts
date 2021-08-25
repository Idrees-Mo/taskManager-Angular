import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { ListsComponent } from './components/lists/lists.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import { ListDialogComponent } from './components/list-dialog/list-dialog.component';

@NgModule({
  declarations: [AppComponent, TasksComponent, TaskItemComponent, ListsComponent, ListItemComponent, TaskDialogComponent, ListDialogComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
