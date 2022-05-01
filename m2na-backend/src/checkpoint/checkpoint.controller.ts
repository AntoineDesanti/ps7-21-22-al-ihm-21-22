import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {Checkpoint} from "./dto/checkpoint";
import {CheckpointService} from "./checkpoint.service";

@Controller('api/checkpoint')
export class CheckpointController {
    constructor(private checkpointService: CheckpointService){};

    @Get('/getAll')
    async getAllCheckpoints(): Promise<Checkpoint[]> {
        return await this.checkpointService.getAllCheckpoints();
    }

    @Get('/isOpen/:id')
    async isOpen(@Param('id') id): Promise<boolean> {
        console.log("isOpen() with param: ", id);
        return await this.checkpointService.isOpen(id);
    }

    @Get('/setStatus/:id/:true_or_false')
    async setStatus(@Param('id') id, @Param('true_or_false') true_or_false): Promise<void> {
        const val : boolean = (true_or_false == "true")? true: false;
        console.log("setOpen() with param: ", id, val);
        await this.checkpointService.setStatus(id, val);
    }

    @Get('/getAwaitingPassengersAtCheckpoint/:id')
    async getAwaitingPassengersAtCheckpoint(@Param('id') id): Promise<number> {
        return await this.checkpointService.getAwaitingPassengers(id);
    }

    @Post('/create')
    async createCheckpoint(@Body() checkpoint: Checkpoint): Promise<Checkpoint> {
        return await this.checkpointService.createCheckpoint(checkpoint);
    }
}
