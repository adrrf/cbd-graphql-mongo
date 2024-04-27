import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";
import { Season } from "./perfume.type";
import { TimeOfDay } from "./perfume.type";
import { Brand } from "../brand/brand.entity";

@Entity()
export class Perfume {
    @ObjectIdColumn()
    _id: string;
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    brand: Brand;
    @Column()
    description: string;
    @Column(
        {
            type: 'int'
        }
    )
    releaseYear: number;
    @Column()
    accords: string[];
    @Column()
    perfumer: string;
    @Column()
    rating: number;
    @Column(
        {
            type: 'enum',
            enum: Season,
            array: true,
            default: [Season.UNKNOWN]
        }
    )
    seasons: Season[];
    @Column(
        {
            type: 'enum',
            enum: TimeOfDay,
            array: true,
            default: [TimeOfDay.UNKNOWN]
        }
    )
    timesOfDay: TimeOfDay[];
}