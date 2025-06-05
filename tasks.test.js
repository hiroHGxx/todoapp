const Todo = require('./tasks');

describe('Todo functions', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('addTask stores a task', () => {
    Todo.addTask('task1');
    expect(Todo.getTasks()).toEqual(['task1']);
  });

  test('deleteTask removes a task', () => {
    Todo.addTask('task1');
    Todo.addTask('task2');
    Todo.deleteTask('task1');
    expect(Todo.getTasks()).toEqual(['task2']);
  });
});
