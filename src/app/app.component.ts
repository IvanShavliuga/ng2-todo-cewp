import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';

  todos = [
    { name: 'Ann', city: 'New York', age: 30, done: false },
    { name: 'Jhon', city: 'Paris', age:25, done: false },
    { name: 'Max', city: 'Moskow', age:23, done: true },
    { name: 'Steven', city: 'Lion', age:23, done: true }
  ];

  newTodo = 'Ivan';
  newAge = 30;
  newCity = "Novopolotsk";
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
    const t = { name: this.newTodo,city: this.newCity,age: this.newAge, done: false };
    this.todos.push(t);
    this.newTodo = '';
  }

}
