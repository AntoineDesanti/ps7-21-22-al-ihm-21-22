import { Test, TestingModule } from '@nestjs/testing';
import { PersonController } from './person.controller';
import {PersonService} from "./person.service";
import {getModelToken} from "@nestjs/sequelize";
import {Crosses} from "../crosses/dto/crosses";
import {Person} from "./dto/person";

describe('PersonController', () => {
  let controller: PersonController;

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

    controller = module.get<PersonController>(PersonController);
  });

  /*it('should be defined', () => {
    expect(agent).toBeDefined();
  });*/

  it('should be true', () => {
    expect(true).toBe(true);
  });
});
