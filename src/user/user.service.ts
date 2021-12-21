import { Injectable } from '@nestjs/common';
import { RegisterUserResponse,  } from 'src/interface/user';
import { RegisterDto } from './dto/register.dto';
import { User } from './user.entity';
import { hashPwd } from './utils/hash-pwd';



@Injectable()
export class UserService {

    filter(user: User): RegisterUserResponse {
        const {id, email, firstName} = user;
        return {id, email, firstName};
    }


    async register(newUser: RegisterDto): Promise<RegisterUserResponse> {
        const user = new User();
        user.firstName = newUser.firstName;
        user.email = newUser.email;
        user.pwdHash = hashPwd(newUser.pwd);
        await user.save(); 

        return this.filter(user);
    }

    async getOneUser(id: string): Promise<User> {
        return await User.findOne(id);
    }

}
