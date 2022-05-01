import { Module } from '@nestjs/common';
import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';
import {PersonService} from "../person/person.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Checkpoint} from "../checkpoint/dto/checkpoint";
import {Application} from "./dto/application";

@Module({
  imports: [SequelizeModule.forFeature([Application])],
  controllers: [ApplicationController],
  providers: [ApplicationService],
  exports: [ApplicationService]
})
export class ApplicationModule {}
