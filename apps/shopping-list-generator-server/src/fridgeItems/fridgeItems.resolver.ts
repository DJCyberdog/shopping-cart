import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FridgeItemsResolverBase } from "./base/fridgeItems.resolver.base";
import { FridgeItems } from "./base/FridgeItems";
import { FridgeItemsService } from "./fridgeItems.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FridgeItems)
export class FridgeItemsResolver extends FridgeItemsResolverBase {
  constructor(
    protected readonly service: FridgeItemsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
