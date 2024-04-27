import { Field, Float, ID, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { BrandType } from "../brand/brand.type";

export enum Season {
    SPRING = 'SPRING',
    SUMMER = 'SUMMER',
    AUTUMN = 'AUTUMN',
    WINTER = 'WINTER',
    UNKNOWN = 'UNKNOWN',
}

export enum TimeOfDay {
    DAY = 'DAY',
    NIGHT = 'NIGHT',
    UNKNOWN = 'UNKNOWN',
}

registerEnumType(Season, {
    name: 'Season',
});

registerEnumType(TimeOfDay, {
    name: 'TimeOfDay',
});

@ObjectType('Perfume')
export class PerfumeType {
    @Field(type => ID)
    id: string;
    @Field()
    name: string;
    @Field()
    brand: BrandType;
    @Field()
    description: string;
    @Field(type => Int)
    releaseYear: number;
    @Field(type => [String])
    accords: string[];
    @Field()
    perfumer: string;
    @Field(type => Float)
    rating: number;
    @Field(type => [Season])
    seasons: Season[];
    @Field(type => [TimeOfDay])
    timesOfDay: TimeOfDay[];
}