import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FridgeItemsService } from "./fridgeItems.service";
import { FridgeItemsControllerBase } from "./base/fridgeItems.controller.base";

@swagger.ApiTags("fridgeItems")
@common.Controller("fridgeItems")
export class FridgeItemsController extends FridgeItemsControllerBase {
  constructor(
    protected readonly service: FridgeItemsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
