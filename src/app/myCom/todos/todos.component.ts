import { Component, OnInit } from '@angular/core';
import { Todo } from "./Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor() {

    this.todos = [

      {
        sno: 1,
        title: "This is title",
        desc: "Descreption",
        active: true
      },

      {
        sno: 2,
        title: "This is title2",
        desc: "Descreption",
        active: true
      },

      {
        sno: 3,
        title: "This is title3",
        desc: "Descreption",
        active: true
      }
    ]
  }
  ngOnInit(): void {
    //normal forloop
    // for(var i=0;i<this.todos.length;i++){
    //   console.log(this.todos[i])
    // }
         
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
   } 
  addTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
  }   

}
