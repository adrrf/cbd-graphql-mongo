import { Module } from '@nestjs/common';
import { PerfumeResolver } from './perfume.resolver';
import { PerfumeService } from './perfume.service';
import { BrandService } from '../brand/brand.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Perfume } from './perfume.entity';
import { BrandModule } from '../brand/brand.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Perfume]),
        BrandModule
    ],
    providers: [PerfumeResolver, PerfumeService],
})
export class PerfumeModule {}
