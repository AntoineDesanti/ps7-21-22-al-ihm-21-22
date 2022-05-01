import {IsBoolean, IsLatitude, IsLatLong, IsLongitude, IsNumber, IsString, IsUUID} from "class-validator";
import {Column, Table, Model, ForeignKey, BelongsToMany, BelongsTo, HasOne} from "sequelize-typescript";
import {Crosses} from "../../crosses/dto/crosses";
import {Agent} from "../../agent/dto/agent";

@Table
export class Checkpoint extends Model {

    @Column
    @IsString()
    name: string;

    @Column
    @IsLatitude()
    lat: number;

    @Column
    @IsLongitude()
    long: number;

    @Column
    @IsNumber()
    maximumFlowPerMinute: number;

    @Column
    @IsBoolean()
    isOpen: boolean;

    @Column
    @IsNumber()
    awaitingPassengers: number;

    @HasOne(() => Crosses ,'checkpointId')
    cross: Crosses

    @HasOne(() => Agent, 'checkpointId')
    agent: Agent
}
