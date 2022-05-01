import {IsBoolean, IsLatitude, IsLatLong, IsLongitude, IsNumber, IsString, IsUUID} from "class-validator";
import {Column, Table, Model, ForeignKey, HasOne, BelongsTo} from "sequelize-typescript";
import {Person} from "../../person/dto/person";
import {Checkpoint} from "../../checkpoint/dto/checkpoint";
import {Agent} from "../../agent/dto/agent";
import {Crosses} from "../../crosses/dto/crosses";

@Table
export class Application extends Model {

    @ForeignKey(() => Person)
    @Column
    @IsLatitude()
    passengerId: number;

    @Column
    @IsLongitude()
    plannedCrossDate: string;

    @Column
    @IsString()
    validated: boolean;

    @BelongsTo(() => Person, 'passengerId')
    person: Person

    @HasOne(() => Crosses, 'applicationId')
    crosses: Crosses

}
