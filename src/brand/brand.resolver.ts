import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { BrandType } from "./brand.type";
import { BrandService } from "./brand.service";

@Resolver(of => BrandType)
export class BrandResolver {
    constructor(
        private brandService: BrandService
    ) {}

    @Query(returns => [BrandType])
    brands() {
        return this.brandService.getBrands();
    }

    @Query(returns => BrandType)
    brand(
        @Args('id') id: string
    ) {
        return this.brandService.getBrand(id);
    }

    @Mutation(returns => BrandType)
    createBrand(
        @Args('name') name: string,
        @Args('description') description: string,
        @Args('country') country: string,
    ) {
        return this.brandService.createBrand(
            name,
            description,
            country
        );
    }
}