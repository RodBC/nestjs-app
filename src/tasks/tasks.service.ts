import { Injectable, HttpStatus } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { AppDataSource } from '../data-source';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {

  async create(createTask: CreateTaskDto) {
    const {description, title, status} = createTask;
    try {
      return await AppDataSource.createQueryBuilder()
        .insert()
        .into(Task)
        .values({description, title, status})
        .execute();
    } catch (err) {
      console.log(err);
      return HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

  async findAll() {
    
    try {
      return await AppDataSource.createQueryBuilder()
        .select('o')
        .from(Task, 'o')
        .getMany();
    } catch (err) {
      console.log(err);
      return HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }

  async remove(id: number) {
    try{
      return await AppDataSource.createQueryBuilder()
      .delete()
      .from(Task)
      .where('id=:taskID', {taskID : id})
      .execute()
    } catch(err) {
      console.log(err)
      return HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }


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

  // async getTaskById(id: any): Promise<Task> {
  //   const task = await AppDataSource.getRepository(Task)
  //     .createQueryBuilder('t')
  //     .where('t.id = :id', { id })
  //     .getOne();

  //   if (!task) {
  //     throw new NotFoundException(`Task with id "${id}" not found`);
  //   }
  //   return task;
  // }

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

}
