import {
    Controller,
    Body,
    Get,
    Post,
    Param,
    Delete,
} from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('User')
export class UserController{
    constructor(private authService: AuthService){}
    
    @ApiResponse({
        status:201,
        description:'create task'
      })
      @Post()
      async create(@Body() authDto: AuthCredentialsDto) {
        return this.authService.createUser(authDto);
      }
      
      @Get()
      async findAll(){
        return this.authService.findAll()
      }
    
}