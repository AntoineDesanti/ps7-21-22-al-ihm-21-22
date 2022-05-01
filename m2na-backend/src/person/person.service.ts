import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {Person} from "./dto/person";

@Injectable()
export class PersonService {
    public persons: Person[] = [];

    constructor(
        @InjectModel(Person)
        private personModel: typeof Person,
    ) {}

    async getAllPersons(): Promise<Person[]> {
        return await this.personModel.findAll();
    }

    async createPerson(person : Person): Promise<Person>{
        person = await this.personModel.create({
            name: person.name,
            lastName: person.lastName,
            birthDate: person.birthDate,
            gender: person.gender,
            nationality: person.nationality,
            residencyAddress: person.residencyAddress
        });

        return person;
    }
}
