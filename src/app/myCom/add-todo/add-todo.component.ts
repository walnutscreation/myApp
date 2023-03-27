import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todos/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  [x: string]: any;
  title!: string;
  desc!: string;

@Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

constructor(){ 
}
  ngOnInit(): void{
  }
onSubmit(){
  const todo={
    sno:8,
    title: this.title,
    desc: this.desc,
    active: true
  }
  this['todoAdd'].emit(todo);
}  
}


