import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, PayloadTooLargeException, UnauthorizedException } from '@nestjs/common';
import { User } from '../user/user.entity';
import { error } from 'console';

export interface JwtPayload {
    id: string;
}

function cookieExtractor(req: any): null | string {
    return (req && req.cookies) ? (req.cookies?.jwt ?? null) : null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: cookieExtractor,
            secretOrKey: 'SKLDAJKSDHKASDOPisajdkasdn aishjdakjsdnkajA kjasndkj bnJKDSBNKJSdb jkabs jkabsdkj abKJab djkab uwqjbd jkasbd uqwuiy&as^&* 6D87 D87say DIUASH kjdh kjs bdkjab djk',
        });
    }

    async validate(payload: JwtPayload, done: (error, user) => void) {
        if (!payload || !payload.id) {
            return done(new UnauthorizedException(), false);
        }
        const user = await User.findOne({ currentTokenId: payload.id});
    
        if (!user) {
            return done(new UnauthorizedException(), false);
    }
    
    done(null, user);
 }
    
}