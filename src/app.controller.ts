import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { listNamespaces } from 'dist/locker/locker';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  homepage(): string {
    // TODO: serve frontend app
    return 'Locker';
  }

  @Get('/contexts')
  listContexts(): any {
    return this.appService.listContexts();
  }

  @Get('/namespaces/:context')
  listNamespaces(@Param() params): any {
    return this.appService.listNamespaces(params.context);
  }

  @Get('secrets/:context/:namespace')
  async list(@Param() params): Promise<any> {
    return this.appService.list(params.context, params.namespace);
  }

  @Get('secrets/:context/:namespace/:name')
  async get(@Param() params): Promise<any> {
    return this.appService.get(params.context, params.namespace, params.name);
  }

}
