import { Injectable } from '@nestjs/common';
import { listsecrets, secret } from './locker/locker';

@Injectable()
export class AppService {
  async list(): Promise<any> {
    return await listsecrets();
  }

  async get(name: string): Promise<any> {
    return await secret(name);
  }

  favicon(): string {
    return 'todo';
  }
}
