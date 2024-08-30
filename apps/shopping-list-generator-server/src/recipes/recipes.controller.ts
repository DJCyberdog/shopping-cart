import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RecipesService } from "./recipes.service";
import { RecipesControllerBase } from "./base/recipes.controller.base";

@swagger.ApiTags("recipes")
@common.Controller("recipes")
export class RecipesController extends RecipesControllerBase {
  constructor(
    protected readonly service: RecipesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
