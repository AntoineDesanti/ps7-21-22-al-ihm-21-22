import { Module } from '@nestjs/common';
import { CrossesController } from './crosses.controller';
import { CrossesService } from './crosses.service';
import {CheckpointService} from "../checkpoint/checkpoint.service";
import { SequelizeModule } from '@nestjs/sequelize';
import { Crosses } from './dto/crosses';

@Module({
  imports: [SequelizeModule.forFeature([Crosses])],
  controllers: [CrossesController],
  providers: [CrossesService],
  exports: [CrossesService],
})
export class CrossesModule {}
