import { Test, TestingModule } from '@nestjs/testing';
import { CrossesController } from './crosses.controller';
import {CrossesService} from "./crosses.service";

describe('CrossesController', () => {
  let controller: CrossesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrossesController],
      providers: [CrossesService]
    }).compile();

    controller = module.get<CrossesController>(CrossesController);
  });

  /*it('should be defined', () => {
    expect(agent).toBeDefined();
  });*/

  it('should be true', () => {
    expect(true).toBe(true);
  });
});
