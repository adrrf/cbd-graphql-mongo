import { Module } from '@nestjs/common';
import { BrandResolver } from './brand.resolver';
import { BrandService } from './brand.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './brand.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Brand])
    ],
    providers: [BrandResolver, BrandService],
    exports: [BrandService],
})
export class BrandModule {}
