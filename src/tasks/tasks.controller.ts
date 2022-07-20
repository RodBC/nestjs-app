import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/getTaskFIlter.dto';
import { Task } from './entities/task.entity';
import { ApiResponse } from '@nestjs/swagger';
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @ApiResponse({
    status:201,
    description:'create task'
  })
  @Post()
  async create(@Body() CreateTaskDto: CreateTaskDto) {
    return this.taskService.create(CreateTaskDto);
  }

  @ApiResponse({
    status:200,
    description:'find all tasks'
  })  
  @Get()
  async findAll() {
    return this.taskService.findAll();
  }

  // @Get(':id')
  // getTaskById(@Param('id') id: string): Promise<Task> {
  //   return this.taskService.getTaskById(id);
  // }


  
  // @Get()
  // getAllTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
  //   // if (filters) {call this.tasksService.getTasksFilterDto}
  //   // otherwise, just return all tasks
  //   if (Object.keys(filterDto).length) {
  //     return this.taskService.getTasksFiltered(filterDto);
  //   }
  //   else {
  //     return this.taskService.getAllTaks();
  //   }
  // }

  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   return this.taskService.deleteTask(id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body('status') status: TaskStatus,
  // ): Task {
  //   return this.taskService.updateTaskStatus(id, status);
  // }

}
