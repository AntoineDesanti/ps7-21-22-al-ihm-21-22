import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Checkpoint} from "../checkpoint/dto/checkpoint";
import {Application} from "./dto/application";
import {Column} from "sequelize-typescript";
import {IsLatitude, IsLongitude, IsString} from "class-validator";
import {Agent} from "../agent/dto/agent";

@Injectable()
export class ApplicationService {
    public application: Application[] = [];

    constructor(
        @InjectModel(Application)
        private applicationModel: typeof Application,
    ) {}

    async getAllApplications(): Promise<Application[]> {
        return await this.applicationModel.findAll();
    }

    async createApplication(application : Application): Promise<Application>{
        application = await this.applicationModel.create({
            passengerId: application.passengerId,
            plannedCrossDate: application.plannedCrossDate,
            validated: application.validated
        });
        // this.checkpoints.push(checkpoint);
        return application;
    }

    async createApplicationByParam(personId : number, plannedCrossDate : number, validated : boolean){
    return await this.applicationModel.create({
        passengerId: personId,
        plannedCrossDate: plannedCrossDate,
        validated: validated
    });
    }

}
