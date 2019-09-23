import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoItems = ['Go for a walk with my dog', 'Buy some bread and butter', 'Learn how to paint'];

  addTodo(title: string) {
    this.todoItems = [title, ...this.todoItems];
  }
}
