import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SequelizeModule} from "@nestjs/sequelize";
import { CheckpointModule } from './checkpoint/checkpoint.module';
import { PersonModule } from './person/person.module';
import { AgentModule } from './agent/agent.module';
import { CrossesModule } from './crosses/crosses.module';
import { PersonController } from './person/person.controller';
import { Person } from './person/dto/person';
import { Agent } from './agent/dto/agent';
import {Checkpoint} from "./checkpoint/dto/checkpoint";
import {Crosses} from "./crosses/dto/crosses";
import { ApplicationModule } from './application/application.module';
import {Application} from "./application/dto/application";

@Module({
  imports: [
      SequelizeModule.forRoot({
        dialect: 'mysql',
        host: 'localhost',

       // host: 'host.docker.internal',

        port: 3306,
        username: 'm2na',
        password: 'P@$$w0rd',
        database: 'm2na',
        logQueryParameters: true,
        models: [Agent, Checkpoint, Crosses, Application, Person],
      }),
    CheckpointModule, PersonModule, AgentModule, CrossesModule, ApplicationModule],
    controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
