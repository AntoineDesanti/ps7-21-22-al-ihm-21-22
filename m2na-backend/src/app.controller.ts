import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  private i = 0;

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log("here", Math.sqrt(++this.i));
    return this.appService.getHello();
  }
}
