import { Injectable, HttpStatus } from '@nestjs/common';
import { AppDataSource } from '../data-source';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Atuh } from './entities/auth.entity';
// bussiness logic, signUp != creatingUser(consumingService)
@Injectable()
export class AuthService{

    async createUser(authCredentialsDto: AuthCredentialsDto) {
        const {username, password} = authCredentialsDto;
        try{
            AppDataSource.createQueryBuilder()
            .insert()
            .into(Atuh)
            .values({username,password})
            .execute();
        } catch(err){
            console.log(err);
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
    }

    async findAll(){
        try{
            return await AppDataSource.createQueryBuilder()
                .select('auth')
                .from(Atuh, 'auth')
                .getMany();
        }catch(err){
            console.log(err)
            return HttpStatus.INTERNAL_SERVER_ERROR
        }
    }
}