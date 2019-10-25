import { Injectable } from '@nestjs/common';
import { listsecrets, secret } from './locker/locker';

@Injectable()
export class AppService {
  async list(context: string, namespace: string): Promise<any> {
    return await listsecrets(context, namespace);
  }

  async get(context: string, namespace: string, name: string): Promise<any> {
    return await secret(context, namespace, name);
  }

}
