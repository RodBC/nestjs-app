import { Entity, Repository } from "typeorm"
import { Task } from "./task.entity"

@Entity('Task')

export class TaskRepository extends Repository<Task> {

}