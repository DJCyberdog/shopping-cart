import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ShoppingCartService } from "./shoppingCart.service";
import { ShoppingCartControllerBase } from "./base/shoppingCart.controller.base";

@swagger.ApiTags("shoppingCarts")
@common.Controller("shoppingCarts")
export class ShoppingCartController extends ShoppingCartControllerBase {
  constructor(
    protected readonly service: ShoppingCartService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
