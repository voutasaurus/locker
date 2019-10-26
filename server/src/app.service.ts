import { Injectable } from '@nestjs/common';
import { listContexts, listNamespaces, listSecrets, secret } from './locker/locker';

@Injectable()
export class AppService {
  listContexts(): any {
    return listContexts();
  }

  listNamespaces(context: string): any {
    // NAMESPACES overrides the api (for permissions issues)
    const namespaces = process.env.NAMESPACES;
    if (namespaces == null || namespaces === '' ) {
      return listNamespaces(context);
    }
    const arr = [];
    namespaces.split(',').forEach(element => {
      arr.push(element);
    });
    return arr;
  }

  async list(context: string, namespace: string): Promise<any> {
    return await listSecrets(context, namespace);
  }

  async get(context: string, namespace: string, name: string): Promise<any> {
    return await secret(context, namespace, name);
  }

}
