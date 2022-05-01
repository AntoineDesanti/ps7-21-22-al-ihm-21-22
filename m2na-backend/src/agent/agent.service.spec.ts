import { Test, TestingModule } from '@nestjs/testing';
import { AgentService } from './agent.service';
import {AgentController} from "./agent.controller";
import {CheckpointService} from "../checkpoint/checkpoint.service";
import {getModelToken} from "@nestjs/sequelize";
import {Checkpoint} from "../checkpoint/dto/checkpoint";
import {Agent} from "./dto/agent";

describe('AgentService', () => {
  let service: AgentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ AgentService, {
      provide: getModelToken(Agent),
      useValue: {
        save: jest.fn().mockResolvedValue(Agent),
        find: jest.fn().mockResolvedValue([Agent]),
      }}],
      controllers: [AgentController],
    }).compile();

    service = module.get<AgentService>(AgentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
