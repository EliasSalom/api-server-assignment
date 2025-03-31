import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract token from header
      ignoreExpiration: false, // Token will expire after the set time
      secretOrKey: process.env.JWT_SECRET || 'your-secret-key', // Use same secret as when signing the token
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username }; // Attach user info to request
  }
}
