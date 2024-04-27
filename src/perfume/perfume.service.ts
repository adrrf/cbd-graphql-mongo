import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Perfume } from "./perfume.entity";
import { Repository } from "typeorm";
import { v4 as uuid } from "uuid";
import { Season } from "./perfume.type";
import { TimeOfDay } from "./perfume.type";
import { BrandService } from "../brand/brand.service";

@Injectable()
export class PerfumeService {
    constructor(
        @InjectRepository(Perfume) private perfumeRepository: Repository<Perfume>,
        private brandService: BrandService
    ) {}

    async getPerfumes(): Promise<Perfume[]> {
        return this.perfumeRepository.find();
    }

    async getPerfume(id: string): Promise<Perfume> {
        return this.perfumeRepository.findOne({ where: { id: id } });
    }

    async createPerfume(
        name: string,
        brand: string,
        description: string,
        releaseYear: number,
        accords: string[],
        perfumer: string,
        rating: number,
        seasons: string[],
        timesOfDay: string[]
    ): Promise<Perfume> {
        const perfume : Perfume = this.perfumeRepository.create();
        perfume.id = uuid();
        perfume.name = name;
        perfume.brand = await this.brandService.getBrand(brand);
        perfume.description = description;
        perfume.releaseYear = releaseYear;
        perfume.accords = accords;
        perfume.perfumer = perfumer;
        perfume.rating = rating;
        perfume.seasons = seasons.map((season: string) => Season[season]);
        perfume.timesOfDay = timesOfDay.map((timeOfDay: string) => TimeOfDay[timeOfDay]);
        return this.perfumeRepository.save(perfume);
    }
}
