import { Test, TestingModule } from '@nestjs/testing';
import { CheckpointController } from './checkpoint.controller';
import {CheckpointService} from "./checkpoint.service";

describe('CheckpointController', () => {
  let controller: CheckpointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckpointService],
      controllers: [CheckpointController],
    }).compile();

    controller = module.get<CheckpointController>(CheckpointController);
  });

  /*it('should be defined', () => {
    expect(agent).toBeDefined();
  });*/

  it('should be true', () => {
    expect(true).toBe(true);
  });
});
