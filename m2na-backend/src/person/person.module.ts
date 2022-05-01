import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Person } from './dto/person';

@Module({
  imports: [SequelizeModule.forFeature([Person])],
  controllers: [PersonController],
  providers: [PersonService],
  exports: [PersonService],
})
export class PersonModule {}
