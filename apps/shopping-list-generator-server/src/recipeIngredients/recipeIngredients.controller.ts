import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RecipeIngredientsService } from "./recipeIngredients.service";
import { RecipeIngredientsControllerBase } from "./base/recipeIngredients.controller.base";

@swagger.ApiTags("recipeIngredients")
@common.Controller("recipeIngredients")
export class RecipeIngredientsController extends RecipeIngredientsControllerBase {
  constructor(
    protected readonly service: RecipeIngredientsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
