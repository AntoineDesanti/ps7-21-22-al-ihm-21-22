import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationService } from './application.service';
import {getModelToken} from "@nestjs/sequelize";
import {Agent} from "../agent/dto/agent";
import {Application} from "./dto/application";

describe('ApplicationService', () => {
  let service: ApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicationService, {
        provide: getModelToken(Application),
        useValue: {
          save: jest.fn().mockResolvedValue(Application),
          find: jest.fn().mockResolvedValue([Application]),
        }}],
    }).compile();

    service = module.get<ApplicationService>(ApplicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
