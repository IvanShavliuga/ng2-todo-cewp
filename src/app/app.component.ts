import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';

  todos = [
    { name: 'first', done: false },
    { name: 'second', done: false },
    { name: 'third', done: true },
  ];

  newTodo = '';

  archive() {
    const oldTodos = this.todos;
    this.todos = [];
    oldTodos.forEach(t => {
      if (!t.done) {
        this.todos.push(t);
      }
    });
  }

  remain() {
    let c = 0;
    this.todos.forEach(t => {
      if (!t.done) {
        c++;
      }
    });
    return c;
  }

  addTodo() {
    const t = { name: this.newTodo, done: false };
    this.todos.push(t);
    this.newTodo = '';
  }

}
