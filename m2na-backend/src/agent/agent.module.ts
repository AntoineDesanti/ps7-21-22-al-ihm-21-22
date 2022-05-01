import { Module } from '@nestjs/common';
import { AgentController } from './agent.controller';
import { AgentService } from './agent.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Agent } from './dto/agent';

@Module({
  imports: [SequelizeModule.forFeature([Agent])],
  controllers: [AgentController],
  providers: [AgentService],
  exports: [AgentService],
})
export class AgentModule {}
