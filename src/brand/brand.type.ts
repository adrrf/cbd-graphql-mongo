import { Field, ID, ObjectType } from "@nestjs/graphql";
  

@ObjectType('Brand')
export class BrandType {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    country: string;

}