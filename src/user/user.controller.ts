import { Body, Controller, forwardRef, Get, Inject, Post } from '@nestjs/common';
import { RegisterUserResponse } from 'src/interface/user';
import { RegisterDto } from './dto/register.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {

    constructor(
        @Inject(UserService) private userService: UserService,
    ){
        
    }

    @Post('/register')
    register(
        @Body() newUser: RegisterDto,
    ): Promise<RegisterUserResponse> {
        return this.userService.register(newUser);
    }


}
