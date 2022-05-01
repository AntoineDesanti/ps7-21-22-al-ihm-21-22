import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {Crosses} from "./dto/crosses";
import {CrossesService} from "./crosses.service";

@Controller('api/crosses')
export class CrossesController {
    constructor(private crossesService: CrossesService){};

    @Get('/getAll')
    async getAllCrosses(): Promise<Crosses[]>{
        return await this.crossesService.getAllCrosses();
    }

    @Post('/create')
    async createCross(@Body() cross: Crosses): Promise<Crosses>{
        return await this.crossesService.createCross(cross);
    }

    @Post('/create/application/:applicationId/checkpoint/:checkpointId/:hasCrossed')
    async createCrossByParam(@Param('applicationId') applicationId, @Param('checkpointId') checkpointId, @Param('hasCrossed') hasCrossed): Promise<Crosses> {
        return await this.crossesService.createCrossByParam(applicationId, checkpointId, hasCrossed);
    }
}
