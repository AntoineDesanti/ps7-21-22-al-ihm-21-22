import {IsBoolean, IsDate, IsLatLong, IsString, IsUUID} from "class-validator";
import {BelongsTo, Column, ForeignKey, HasOne, Model, Table} from "sequelize-typescript";
import {Agent} from "../../agent/dto/agent";
import {Checkpoint} from "../../checkpoint/dto/checkpoint";
import {Application} from "../../application/dto/application";
import {Person} from "../../person/dto/person";

@Table
export class Crosses extends Model {

    @Column
    @IsDate()
    date: string;

    @Column
    @IsBoolean()
    validated: boolean;

    @Column
    @IsUUID()
    @ForeignKey(() => Agent)
    agentId: number;

    @ForeignKey(() => Checkpoint)
    @Column
    @IsUUID()
    checkpointId: number;

    @ForeignKey(() => Application)
    @Column
    @IsUUID()
    applicationId: number;

    @BelongsTo(() => Agent, 'agentId')
    agent: Agent

    @BelongsTo(() => Checkpoint, 'checkpointId')
    checkpoint: Checkpoint

    @BelongsTo(() => Application, 'applicationId')
    application: Application
}
