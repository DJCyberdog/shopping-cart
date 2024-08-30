/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { FridgeItems } from "./FridgeItems";
import { FridgeItemsCountArgs } from "./FridgeItemsCountArgs";
import { FridgeItemsFindManyArgs } from "./FridgeItemsFindManyArgs";
import { FridgeItemsFindUniqueArgs } from "./FridgeItemsFindUniqueArgs";
import { CreateFridgeItemsArgs } from "./CreateFridgeItemsArgs";
import { UpdateFridgeItemsArgs } from "./UpdateFridgeItemsArgs";
import { DeleteFridgeItemsArgs } from "./DeleteFridgeItemsArgs";
import { FridgeItemsService } from "../fridgeItems.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FridgeItems)
export class FridgeItemsResolverBase {
  constructor(
    protected readonly service: FridgeItemsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FridgeItems",
    action: "read",
    possession: "any",
  })
  async _fridgeItemsItemsMeta(
    @graphql.Args() args: FridgeItemsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FridgeItems])
  @nestAccessControl.UseRoles({
    resource: "FridgeItems",
    action: "read",
    possession: "any",
  })
  async fridgeItemsItems(
    @graphql.Args() args: FridgeItemsFindManyArgs
  ): Promise<FridgeItems[]> {
    return this.service.fridgeItemsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FridgeItems, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FridgeItems",
    action: "read",
    possession: "own",
  })
  async fridgeItems(
    @graphql.Args() args: FridgeItemsFindUniqueArgs
  ): Promise<FridgeItems | null> {
    const result = await this.service.fridgeItems(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FridgeItems)
  @nestAccessControl.UseRoles({
    resource: "FridgeItems",
    action: "create",
    possession: "any",
  })
  async createFridgeItems(
    @graphql.Args() args: CreateFridgeItemsArgs
  ): Promise<FridgeItems> {
    return await this.service.createFridgeItems({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FridgeItems)
  @nestAccessControl.UseRoles({
    resource: "FridgeItems",
    action: "update",
    possession: "any",
  })
  async updateFridgeItems(
    @graphql.Args() args: UpdateFridgeItemsArgs
  ): Promise<FridgeItems | null> {
    try {
      return await this.service.updateFridgeItems({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FridgeItems)
  @nestAccessControl.UseRoles({
    resource: "FridgeItems",
    action: "delete",
    possession: "any",
  })
  async deleteFridgeItems(
    @graphql.Args() args: DeleteFridgeItemsArgs
  ): Promise<FridgeItems | null> {
    try {
      return await this.service.deleteFridgeItems(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
