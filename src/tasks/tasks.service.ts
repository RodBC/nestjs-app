import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/getTaskFIlter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
@Injectable()
export class TasksService {

  // getAllTaks(): Task[]{
  //     return this.tasks;
  // };

  // getTasksFiltered(filterDto: GetTasksFilterDto): Task[]{
  //     const { status, search } = filterDto;
  //     let tasks = this.getAllTaks();

  //     if (status){
  //         tasks = tasks.filter((task)=> task.status === status);
  //     };
  //     if (search){
  //         tasks = tasks.filter((task) => {
  //             if (task.title.includes(search) || task.description.includes(search)){
  //                 return true
  //             }
  //             return false
  //         })
  //     }
  //     return tasks;
  // }

  async getTaskById(id:any): Promise<Task> {
    const found = await this.taskRepository.findOne(id)
  
    if (!found){
        throw new NotFoundException(`Task with id "${id}" not found`)
    }
    return found;
}


    async createTask(createTaskDto: CreateTaskDto): Promise<Task>{
        const { description, title } = createTaskDto;

        const task = this.taskRepository.create({
            description,
            title,
            status: TaskStatus.OPEN,
        });

        await this.taskRepository.save(task);
        return task;
    }
  // createTask(CreateTaskDto: CreateTaskDto): Task {
  //     const {title, description} = CreateTaskDto;

  //     const task: Task = {
  //         id: uuid(),
  //         title,
  //         description,
  //         status: TaskStatus.OPEN,
  //     };

  //     this.tasks.push(task);
  //     return task;
  // }

  // updateTaskStatus(id: string, status: TaskStatus){
  //     const task = this.getTaskById(id);
  //     task.status = status;
  //     return task;
  // }

  // deleteTask(id: string): void {
  //     this.tasks = this.tasks.filter((task) => task.id !== id)
  // }
}
