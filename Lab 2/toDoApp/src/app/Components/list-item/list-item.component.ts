import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
@Input() listItem : any;
@Output() sendToParent = new EventEmitter() 

deleteTask(id : number){
      this.sendToParent.emit(id);
}
}
