import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'postgres',
      autoLoadEntities:true,
    }),
    UserModule,
  ],
})
export class AppModule {}
