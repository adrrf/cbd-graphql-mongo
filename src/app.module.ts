import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PerfumeModule } from './perfume/perfume.module';
import { BrandModule } from './brand/brand.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Perfume } from './perfume/perfume.entity';
import { Brand } from './brand/brand.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/perfume-collection',
      synchronize: true,
      entities: [
        Perfume,
        Brand
      ],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    PerfumeModule,
    BrandModule,
  ],
})
export class AppModule {}
