import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.css'
})
export class ToDoFormComponent {
  newTask: string = '';
  @Output() sendToParent = new EventEmitter()

  addTask(){
    console.log(this.newTask);
    this.sendToParent.emit(this.newTask);
  }

}
