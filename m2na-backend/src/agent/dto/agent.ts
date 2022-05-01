import {IsBoolean, IsString, IsUUID} from "class-validator";
import {BelongsTo, Column, ForeignKey, HasOne, Model, Table} from "sequelize-typescript";
import {Person} from "../../person/dto/person";
import {Checkpoint} from "../../checkpoint/dto/checkpoint";
import {Crosses} from "../../crosses/dto/crosses";

@Table
export class Agent extends Model {

    @ForeignKey(() => Person)
    @Column
    @IsUUID()
    personId: number;

    @ForeignKey(() => Checkpoint)
    @Column
    @IsUUID()
    checkpointId: number;

    @Column
    @IsBoolean()
    isWorking: boolean;

    @BelongsTo(() => Checkpoint, 'checkpointId')
    checkpoint: Checkpoint

    @BelongsTo(() => Person, 'personId')
    person: Person

    @HasOne(() => Crosses, 'agentId')
    crosses: Crosses

}
