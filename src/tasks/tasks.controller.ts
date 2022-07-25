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
@Controller('task')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @ApiResponse({
    status:201,
    description:'create task'
  })
  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @ApiResponse({
    status:200,
    description:'find all tasks'
  })  
  @Get()
  async findAll() {
    return this.taskService.findAll();
  }


  @Delete(':id')
  async remove(@Param('id') id:string) {
    return this.taskService.remove(+id);
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


  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body('status') status: TaskStatus,
  // ): Task {
  //   return this.taskService.updateTaskStatus(id, status);
  // }

}
