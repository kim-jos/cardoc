import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(userId: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(userId);

    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(req: any) {
    const { userId, password } = req.body
    const user = await this.usersService.findOne(userId)

    const validatedUser = await this.validateUser(userId, password);
    if (!validatedUser) throw new UnauthorizedException('Unauthorized user');

    const payload = { userId, password };
    const accessToken = this.jwtService.sign(payload)
    return { accessToken };
  }

  async logout() {
    return {
      token: '',
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      maxAge: 0,
    };
  }
}