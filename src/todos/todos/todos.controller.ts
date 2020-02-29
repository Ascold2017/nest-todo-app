import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoTdo } from './todos.tdo';
import { ITodo } from './todos.interfaces';

@Controller('todos')
export class TodosController {

    constructor(private todosService: TodosService) { }

    @Get()
    getTodos(): ITodo[] {
        return this.todosService.getTodos();
    }

    @Post()
    createTodo(@Body() createTodoDto: TodoTdo): ITodo {
        return this.todosService.createTodo(createTodoDto);
    }

    @Get(':id')
    getTodo(@Param('id') id: string): ITodo {
        return this.todosService.getTodoById(+id);
    }

    @Put(':id')
    updateTodo(@Param('id') id: string, @Body() updateTodoDto: TodoTdo): ITodo {
        return this.todosService.updateTodo(+id, updateTodoDto);
    }

    @Delete(':id')
    deleteTodo(@Param('id') id: string): boolean {
        return this.todosService.deleteTodo(+id);
    }
}
