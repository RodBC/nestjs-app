import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    sayHi() {
        return console.log('hi')
    }
}
