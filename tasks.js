(function(global){
  function getTasks(){
    return JSON.parse(global.localStorage.getItem('tasks') || '[]');
  }
  function saveTasks(tasks){
    global.localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  function addTask(task){
    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
    return tasks;
  }
  function deleteTask(task){
    const tasks = getTasks().filter(t => t !== task);
    saveTasks(tasks);
    return tasks;
  }
  const api = { getTasks, saveTasks, addTask, deleteTask };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
  global.Todo = api;
})(typeof globalThis !== 'undefined' ? globalThis : window);
