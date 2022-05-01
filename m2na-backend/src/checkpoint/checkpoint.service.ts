import { Injectable } from '@nestjs/common';
import {Checkpoint} from "./dto/checkpoint";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class CheckpointService {
    public checkpoints: Checkpoint[] = [];

    constructor(
        @InjectModel(Checkpoint)
        private checkpointModel: typeof Checkpoint,
    ) {}

    async getAllCheckpoints(): Promise<Checkpoint[]> {
        await this.checkpointModel.findAll()
            .then(x => x.forEach(y => {
                if (y.isOpen) {
                    y.maximumFlowPerMinute += ((Math.round(Math.random())) === 0 ? -1 : 1);
                    y.save()
                }
            }))
        return await this.checkpointModel.findAll();
        //return this.checkpoints;
    }

    async isOpen(cp_id: string): Promise<boolean> {
        return await this.checkpointModel.findOne(
            {
                attributes: ['isOpen'],
                where: {id: cp_id}
            }).then(c => c.isOpen);
        //return this.checkpoints;
    }

    async setStatus(cp_id: string, cp_is_open: boolean): Promise<void> {
        await this.checkpointModel.update(
            {isOpen: cp_is_open},
            {
                where: {id: cp_id}
            });
        //return this.checkpoints;
    }

    async getAwaitingPassengers(cp_id: string): Promise<number> {
        return await this.checkpointModel.findOne(
            {
                attributes: ['awaitingPassengers'],
                where: {id: cp_id}
            }).then(c => c.awaitingPassengers);
        //return this.checkpoints;
    }

    async createCheckpoint(checkpoint: Checkpoint): Promise<Checkpoint> {
        checkpoint = await this.checkpointModel.create({
            lat: checkpoint.lat,
            name: checkpoint.name,
            long: checkpoint.long,
            maximumFlowPerMinute: checkpoint.maximumFlowPerMinute,
            isOpen: checkpoint.isOpen,
            awaitingPassengers: checkpoint.awaitingPassengers
        });
        // this.checkpoints.push(checkpoint);
        return checkpoint;
    }

    async deleteAllCheckpoints(){
        await this.checkpointModel.destroy({ where: {},
            truncate: false});
    }

    async createDefaultCheckpoints() {
        await this.checkpointModel.create({
            lat: 15,
            name: "A",
            long: 35,
            maximumFlowPerMinute: 10,
            isOpen: true,
            awaitingPassengers: 10
        });

        await this.checkpointModel.create({
            lat: 73,
            name: "B",
            long: 46,
            type: "null",
            maximumFlowPerMinute: 10,
            minimumControllers: 2,
            maximumControllers: 5,
            isOpen: true,
            awaitingPassengers: 100
        });

        await this.checkpointModel.create({
            lat: 32,
            name: "C",
            long: 58,
            type: "null",
            maximumFlowPerMinute: 55,
            minimumControllers: 2,
            maximumControllers: 7,
            isOpen: true,
            awaitingPassengers: 140
        });
    }
}
