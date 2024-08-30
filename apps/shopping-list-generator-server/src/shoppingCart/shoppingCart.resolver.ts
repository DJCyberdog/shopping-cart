import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ShoppingCartResolverBase } from "./base/shoppingCart.resolver.base";
import { ShoppingCart } from "./base/ShoppingCart";
import { ShoppingCartService } from "./shoppingCart.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ShoppingCart)
export class ShoppingCartResolver extends ShoppingCartResolverBase {
  constructor(
    protected readonly service: ShoppingCartService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
