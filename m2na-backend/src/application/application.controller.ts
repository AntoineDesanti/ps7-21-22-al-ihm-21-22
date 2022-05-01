import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CrossesService} from "../crosses/crosses.service";
import {Crosses} from "../crosses/dto/crosses";
import {ApplicationService} from "./application.service";
import {application} from "express";
import {Application} from "./dto/application";

@Controller('api/application')
export class ApplicationController {
    constructor(private applicationService: ApplicationService){};

    @Get('/getAll')
    async getAllApplications(): Promise<Application[]>{
        return await this.applicationService.getAllApplications();
    }

    @Post('/create')
    async createApplication(@Body() application: Application): Promise<Application>{
        return await this.applicationService.createApplication(application);
    }

    @Post('/create/application/:personId/date/:plannedCrossDate/:validated')
    async createApplicationByParam(@Param('personId') personId, @Param('plannedCrossDate') plannedCrossDate, @Param('validated') validated): Promise<Application> {
        return await this.applicationService.createApplicationByParam(personId, plannedCrossDate, validated);
    }
}
