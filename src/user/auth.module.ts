import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [AuthService]
})
export class AuthModule {}
