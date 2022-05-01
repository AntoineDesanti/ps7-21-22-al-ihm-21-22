import {IsBoolean, isBoolean, IsDate, IsNumber, IsString, IsUUID} from "class-validator";
import {BelongsTo, Column, HasOne, Model, PrimaryKey, Table} from "sequelize-typescript";
import {Agent} from "../../agent/dto/agent";
import {Application} from "../../application/dto/application";

@Table
export class Person extends Model {

    @Column
    @IsString()
    name: string;

    @Column
    @IsString()
    lastName: string;

    @Column
    @IsDate()
    birthDate: string;

    @Column
    @IsString()
    gender: string;

    @Column
    @IsString()
    nationality: string;

    @Column
    @IsString()
    residencyAddress: string;

    @HasOne(() => Agent, 'personId')
    agent: Agent

    @HasOne(() => Application, 'passengerId')
    application: Application
    
}
