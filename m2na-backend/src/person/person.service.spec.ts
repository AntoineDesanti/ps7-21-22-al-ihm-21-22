import { Test, TestingModule } from '@nestjs/testing';
import { PersonService } from './person.service';
import {PersonController} from "./person.controller";
import {getModelToken} from "@nestjs/sequelize";
import {Agent} from "../agent/dto/agent";
import {Person} from "./dto/person";

describe('PersonService', () => {
  let service: PersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonController],
      providers: [PersonService, {
        provide: getModelToken(Person),
        useValue: {
          save: jest.fn().mockResolvedValue(Person),
          find: jest.fn().mockResolvedValue([Person]),
        }}]
    }).compile();

    service = module.get<PersonService>(PersonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
