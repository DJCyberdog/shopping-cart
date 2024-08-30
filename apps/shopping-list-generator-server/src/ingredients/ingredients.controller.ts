import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IngredientsService } from "./ingredients.service";
import { IngredientsControllerBase } from "./base/ingredients.controller.base";

@swagger.ApiTags("ingredients")
@common.Controller("ingredients")
export class IngredientsController extends IngredientsControllerBase {
  constructor(
    protected readonly service: IngredientsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
