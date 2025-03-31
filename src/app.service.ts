import { Injectable } from '@nestjs/common';
import { AppDao } from './app.dao';

@Injectable()
export class AppService {
  constructor(private readonly appDao: AppDao) {}
  async signUp(email: string, password: string) {
    return this.appDao.signUp(email, password);
  }

  async login(email: string, password: string) {
    return this.appDao.login(email, password);
  }
}
