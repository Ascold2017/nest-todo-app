import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;
  const testArray = [{ id: 1, title: 'Test', isComplete: true, createdAt: new Date() }];
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it('getTodos should returns array', () => {
    service.todos = testArray;
    const response = service.getTodos();
    expect(response).toEqual(testArray);
  });

  it('getTodo should returns todo', () => {
    service.todos = testArray;
    const response = service.getTodoById(1);
    expect(response).toEqual(testArray[0]);
  });
});
