import { 
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";
import {ApiProperty, ApiTags} from '@nestjs/swagger'

@Entity( {name: 'auth'} )
export class Atuh{
    @ApiProperty({name:'id', type:Number})
    @PrimaryGeneratedColumn('increment', { name: 'id' })
    id: string;

    @Column()
    username:string;

    @Column()
    password: string;    
}


