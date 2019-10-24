import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async list(): Promise<any> {
    return this.appService.list();
  }

  @Get('favicon.ico')
  favicon(): string {
    return this.appService.favicon();
  }

  @Get(':name')
  async get(@Param() params): Promise<any> {
    return this.appService.get(params.name);
  }

}
