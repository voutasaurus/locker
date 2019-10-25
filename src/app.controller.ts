import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  homepage(): string {
    // TODO: serve frontend app
    return 'Locker';
  }

  @Get('secret/:context/:namespace')
  async list(@Param() params): Promise<any> {
    return this.appService.list(params.context, params.namespace);
  }

  @Get('secret/:context/:namespace/:name')
  async get(@Param() params): Promise<any> {
    return this.appService.get(params.context, params.namespace, params.name);
  }

}
