import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PerfumeType } from "./perfume.type";
import { PerfumeService } from "./perfume.service";

@Resolver(of => PerfumeType)
export class PerfumeResolver {
    constructor(
        private perfumeService: PerfumeService
    ) {}

    @Query(returns => [PerfumeType])
    perfumes() {
        return this.perfumeService.getPerfumes();
    }

    @Query(returns => PerfumeType)
    perfume(
        @Args('id') id: string
    ) {
        return this.perfumeService.getPerfume(id);
    }

    @Mutation(returns => PerfumeType)
    createPerfume(
        @Args('name') name: string,
        @Args('brand') brand: string,
        @Args('description') description: string,
        @Args('releaseYear') releaseYear: number,
        @Args({ name: 'accords', type: () => [String]}) accords: string[],
        @Args('perfumer') perfumer: string,
        @Args('rating') rating: number,
        @Args({ name: 'seasons', type: () => [String]}) seasons: string[],
        @Args({ name: 'timesOfDay', type: () => [String]}) timesOfDay: string[]
    ) {
        return this.perfumeService.createPerfume(
            name,
            brand,
            description,
            releaseYear,
            accords,
            perfumer,
            rating,
            seasons,
            timesOfDay
        );
    }
}