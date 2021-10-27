import { Controller, Get, Post,  Inject, Redirect } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('/login')
export class LoginController {

    constructor(
        @Inject(LoginService) private loginService: LoginService,
    ) {

    }


    @Post('/')
    @Redirect('zalogowany.html')
    someMethod(
       
    ) {
        return this.loginService.someMethod()
    }


}

