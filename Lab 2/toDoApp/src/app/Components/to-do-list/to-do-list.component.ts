import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent implements OnChanges {

  tasks: Array<any>;
  @Input() task : any;

  constructor() {
    this.tasks = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.tasks.length)
    this.tasks.push({id : this.tasks.length , description : this.task, completed: false })
  }
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

}