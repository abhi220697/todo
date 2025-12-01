import { Injectable } from '@angular/core';

import { type NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Home Needs ',
      summary:
        'get all the grocery and home items',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'fitnees ',
      summary: 'do yoga daily for 30 minutes ',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'reading ',
      summary:
        'reading for 30 minutes',
      dueDate: '2024-06-15',
    },
  ];

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
