import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Brand } from "./brand.entity";
import { Repository } from "typeorm";
import { v4 as uuid } from "uuid";


@Injectable()
export class BrandService {
    constructor(
        @InjectRepository(Brand) private brandRepository: Repository<Brand>,
    ) {}

    async getBrands(): Promise<Brand[]> {
        return this.brandRepository.find();
    }

    async getBrand(id: string): Promise<Brand> {
        return this.brandRepository.findOne({ where: { id: id } });
    }

    async createBrand(
        name: string,
        description: string,
        country: string
    ): Promise<Brand> {
        const brand : Brand = this.brandRepository.create();
        brand.id = uuid();
        brand.name = name;
        brand.description = description;
        brand.country = country;
        return this.brandRepository.save(brand);
    }
}
