import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RecipeIngredientsResolverBase } from "./base/recipeIngredients.resolver.base";
import { RecipeIngredients } from "./base/RecipeIngredients";
import { RecipeIngredientsService } from "./recipeIngredients.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RecipeIngredients)
export class RecipeIngredientsResolver extends RecipeIngredientsResolverBase {
  constructor(
    protected readonly service: RecipeIngredientsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
