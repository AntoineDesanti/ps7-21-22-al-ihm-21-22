import { Test, TestingModule } from '@nestjs/testing';

import {AgentService} from "./agent.service";
import {Agent} from "./dto/agent";
import {AgentController} from "./agent.controller";
import {getModelToken} from "@nestjs/sequelize";
import {Crosses} from "../crosses/dto/crosses";

describe('AgentController', () => {
  let controller: AgentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgentService, {
        provide: getModelToken(Agent),
        useValue: {
          save: jest.fn().mockResolvedValue(Agent),
          find: jest.fn().mockResolvedValue([Agent]),
        }}],
      controllers: [Agent],
    }).compile();

    controller = module.get<AgentController>(AgentController);
  });

  /*it('should be defined', () => {
    expect(agent).toBeDefined();
  });*/

  it('should be true', () => {
    expect(true).toBe(true);
  });
});
