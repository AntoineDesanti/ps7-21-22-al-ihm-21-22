import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Person } from './person/dto/person';
import {Checkpoint} from "./checkpoint/dto/checkpoint";
import { Agent } from './agent/dto/agent';
import { Crosses } from './crosses/dto/crosses';
import {InjectModel} from "@nestjs/sequelize";
import {CheckpointService} from "./checkpoint/checkpoint.service";
import {Application} from "./application/dto/application";

@Injectable()
export class AppService {
  constructor(private sequelize: Sequelize,
              private checkpointsService: CheckpointService) {
    if (sequelize)
      sequelize.addModels([Person, Checkpoint, Application, Agent, Crosses])
      sequelize.sync().then(r => console.log("tables created")).catch(err => console.error(err));

    this.checkpointsService.deleteAllCheckpoints();
    this.checkpointsService.createDefaultCheckpoints();


  }

  getHello(): string {
    return 'Hello World!';
  }
}
