import { makeAutoObservable } from "mobx";





class TodoStore {
  todos = [];
  
  constructor() {
    makeAutoObservable(this);
  }
  
  addTodo(todo) {
    this.todos.push(todo);
  }
}

interface Task {
  id: number;
  text: string;
  completed: boolean;
}


class TaskStore {
  tasks: Task[] = [];
  title = "Фронтенд";

  constructor() {
    makeAutoObservable(this);
  }

  addTask(text: string) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    this.tasks.push(newTask);
  }

  toggleTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  updateTitle(newTitle: string) {
    this.title = newTitle;
  }
}

export const taskStore = new TaskStore();
export const todoStore = new TodoStore();