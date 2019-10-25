import { Injectable } from '@nestjs/common';
import { listContexts, listNamespaces, listSecrets, secret } from './locker/locker';

@Injectable()
export class AppService {
  listContexts(): any {
    return listContexts();
  }

  listNamespaces(context: string): any {
    return listNamespaces(context);
  }

  async list(context: string, namespace: string): Promise<any> {
    return await listSecrets(context, namespace);
  }

  async get(context: string, namespace: string, name: string): Promise<any> {
    return await secret(context, namespace, name);
  }

}
