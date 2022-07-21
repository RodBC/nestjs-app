import { 
        Column,
        Entity,
        PrimaryGeneratedColumn
 } from "typeorm";
import { TaskStatus } from "../task-status.enum";
import {ApiProperty, ApiTags} from '@nestjs/swagger'
@ApiTags('Task')
@Entity( {name: 'task'} )
export class Task{
    @ApiProperty({name:'id', type:Number})
    @PrimaryGeneratedColumn('increment', { name: 'id' })
    id: string;

    @Column()
    title:string;

    @Column()
    description: string;
    
    @ApiProperty({name:'status', type:String, nullable:true})
    @Column()
    status?: TaskStatus;
}