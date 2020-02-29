import { Injectable } from '@nestjs/common';
import { ITodo } from './todos.interfaces';
import { TodoTdo } from './todos.tdo';

@Injectable()
export class TodosService {
    public todos: ITodo[] = [];

    getTodos(): ITodo[] {
        return this.todos;
    }

    getTodoById(id: number): ITodo {
        return this.todos.find(todo => todo.id === id);
    }

    createTodo(todo: TodoTdo): ITodo {
        const newTodo: ITodo = {
            id: this.todos.length + 1,
            createdAt: new Date(),
            ...todo
        };
        this.todos.push(newTodo);
        return newTodo;
    }

    updateTodo(id: number, updateTodo: TodoTdo): ITodo {
        const update: ITodo = {
            id,
            createdAt: new Date(),
            ...updateTodo
        };
        this.todos.map(todo => todo.id === id ? update : todo);
        return update;
    }

    deleteTodo(id: number): boolean {
        this.todos = this.todos.filter(todo => todo.id !== id);
        return true;
    }
}
