import { Injectable } from '@nestjs/common';
import {Crosses} from "./dto/crosses";
import {InjectModel} from "@nestjs/sequelize";
import {Column} from "sequelize-typescript";
import {IsBoolean, IsDate, IsUUID} from "class-validator";


@Injectable()
export class CrossesService {
    public crosses: Crosses[] = [];

    constructor(
        @InjectModel(Crosses)
        private checkpointModel: typeof Crosses,
    ) {}

    async getAllCrosses(): Promise<Crosses[]> {
        return await this.checkpointModel.findAll();
    }

    async createCross(cross : Crosses): Promise<Crosses>{
        this.crosses.push(cross);
        return await this.checkpointModel.create({
            date: cross.date,
            validated: cross.validated,
            agentId: cross.agentId,
            checkpointId: cross.checkpointId,
            applicationId: cross.applicationId
        });
    }

    async createCrossByParam(applicationId : number, checkpointId : number, hasCrossed : boolean){
        return await this.checkpointModel.create({
            date : Date.now(),
            validated : hasCrossed,
            applicationId : applicationId,
            checkpointId : checkpointId,
            agentId : null
        })
    }

}
