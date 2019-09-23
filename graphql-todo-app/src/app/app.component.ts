import { Component } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

const helloWorld = gql`
  {
    helloWorld
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoItems = ['Go for a walk with my dog', 'Buy some bread and butter', 'Learn how to paint'];
  message: string;

  constructor(private apollo: Apollo) {
    this.apollo
      .watchQuery<{helloWorld: string}>({query: helloWorld})
      .valueChanges
      .subscribe(result => {
        this.message = result.data.helloWorld;
      });
  }

  addTodo(title: string) {
    this.todoItems = [title, ...this.todoItems];
  }
}
