import { Controller, Body, Get, Post, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTaks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.taskService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id:string,
    @Body('status') status: TaskStatus,
  ): Task{
    return this.taskService.updateTaskStatus(id, status);
  }
  
  @Post()
  createTask(@Body() CreateTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(CreateTaskDto);
  }
}
