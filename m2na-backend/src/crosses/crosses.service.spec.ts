import { Test, TestingModule } from '@nestjs/testing';
import { CrossesService } from './crosses.service';
import {CrossesController} from "./crosses.controller";
import {getModelToken} from "@nestjs/sequelize";
import {Crosses} from "./dto/crosses";

describe('CrossesService', () => {
  let service: CrossesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrossesController],
      providers: [CrossesService, {
        provide: getModelToken(Crosses),
        useValue: {
          save: jest.fn().mockResolvedValue(Crosses),
          find: jest.fn().mockResolvedValue([Crosses]),
        }}]
    }).compile();

    service = module.get<CrossesService>(CrossesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
