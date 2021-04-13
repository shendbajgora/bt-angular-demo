import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodosService} from '../../shared/services/todos/todos.service';
import {ITodo} from '../../shared/models/todo';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {

  todos: ITodo [] = [];

  subscription: Subscription = new Subscription();

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.fetchTodos();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private fetchTodos(): void {
    this.subscription = this.todosService.readAll().subscribe(response => {
      this.todos = response;
    });
  }
}
