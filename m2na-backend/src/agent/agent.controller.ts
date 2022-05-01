import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {AgentService} from "./agent.service";
import {Agent} from "./dto/agent";

@Controller('api/agent')
export class AgentController {
    constructor(private agentService: AgentService){};

    @Get('/getAll')
    async getAllAgents(): Promise<Agent[]> {
        return await this.agentService.getAllAgents();
    }

    @Get('/getNumberAtCheckpoint/:cp_id')
    async getNumberAtCheckpoint(@Param('id') id): Promise<number> {
        //return await this.agentService.getAgentsNumberAtCheckpoint(id);
        return await id==1? 2:5;
    }

    @Post('/create')
    async createAgent(@Body() checkpoint: Agent): Promise<Agent> {
        return await this.agentService.createAgent(checkpoint);
    }
}
