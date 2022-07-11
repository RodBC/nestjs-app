import { Controller, Body, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTaks();
  }

  @Post()
  createTask(@Body() body) {
    const { title, description } = body;
    return this.taskService.createTask(title, description);
  }
}
