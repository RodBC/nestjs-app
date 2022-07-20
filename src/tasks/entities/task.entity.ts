import { 
        Column,
        Entity,
        PrimaryGeneratedColumn
 } from "typeorm";
import { TaskStatus } from "../task-status.enum";
import {ApiProperty, ApiTags} from '@nestjs/swagger'
@ApiTags('Tasks')
@Entity( {name: 'tasks'} )
export class Task{
    @ApiProperty({name:'id', type:Number})
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title:string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;
}