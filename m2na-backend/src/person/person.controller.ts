import {Body, Controller, Get, Post} from '@nestjs/common';
import {PersonService} from "../person/person.service";
import {Person} from "../person/dto/person";

@Controller('api/person')
export class PersonController {
    constructor(private personService: PersonService){};

    @Get('/getAll')
    async getAllPersons(): Promise<Person[]> {
        return await this.personService.getAllPersons();
    }

    @Post('/create')
    async createPerson(@Body() person: Person): Promise<Person> {
        return await this.personService.createPerson(person);
    }
}
