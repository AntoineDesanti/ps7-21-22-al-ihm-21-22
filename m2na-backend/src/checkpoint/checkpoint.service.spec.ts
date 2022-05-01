import { Test, TestingModule } from '@nestjs/testing';
import {CheckpointService} from './checkpoint.service';
import {CheckpointController} from "./checkpoint.controller";
import {getModelToken} from "@nestjs/sequelize";
import {Checkpoint} from "./dto/checkpoint";

describe('CheckpointService', () => {
  let service: CheckpointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckpointService,{
        provide: getModelToken(Checkpoint),
        useValue: {
          save: jest.fn().mockResolvedValue(Checkpoint),
          find: jest.fn().mockResolvedValue([Checkpoint]),
      }}],
      controllers: [CheckpointController],
    }).compile();

    service = module.get<CheckpointService>(CheckpointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
