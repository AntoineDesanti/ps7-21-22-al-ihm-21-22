import { Injectable } from '@nestjs/common';
import {Agent} from "./dto/agent";
import {InjectModel} from "@nestjs/sequelize";
import sequelize from "sequelize";
import {Column} from "sequelize-typescript";
import {IsBoolean, IsUUID} from "class-validator";
import {Checkpoint} from "../checkpoint/dto/checkpoint";

@Injectable()
export class AgentService {
    public agents: Agent[] = [];

    constructor(
        @InjectModel(Agent)
        private agentModel: typeof Agent,
    ) {}

    async getAllAgents(): Promise<Agent[]> {
        return await this.agentModel.findAll();
        // return this.agents;

    }

    async getAgentsNumberAtCheckpoint(cp_id: string): Promise<Agent[] | number> {
        return await this.agentModel.findAll(
            {
                    attributes: [
                        [sequelize.fn('COUNT', sequelize.col('id')), 'nb_agents'],
                    ],
                    where: {assignedCheckpoint : cp_id}
            }).then(c => c);
    }

    async createAgent(agent: Agent): Promise<Agent> {
        agent = await this.agentModel.create({
            personId: agent.personId,
            checkpointId: agent.checkpointId,
            isWorking: agent.isWorking,
        });
        //this.agents.push(agent);
        return agent;
    }

    
}
