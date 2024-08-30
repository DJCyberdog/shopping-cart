/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { RecipesService } from "../recipes.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RecipesCreateInput } from "./RecipesCreateInput";
import { Recipes } from "./Recipes";
import { RecipesFindManyArgs } from "./RecipesFindManyArgs";
import { RecipesWhereUniqueInput } from "./RecipesWhereUniqueInput";
import { RecipesUpdateInput } from "./RecipesUpdateInput";
import { RecipeIngredientsFindManyArgs } from "../../recipeIngredients/base/RecipeIngredientsFindManyArgs";
import { RecipeIngredients } from "../../recipeIngredients/base/RecipeIngredients";
import { RecipeIngredientsWhereUniqueInput } from "../../recipeIngredients/base/RecipeIngredientsWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RecipesControllerBase {
  constructor(
    protected readonly service: RecipesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Recipes })
  @nestAccessControl.UseRoles({
    resource: "Recipes",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRecipes(
    @common.Body() data: RecipesCreateInput
  ): Promise<Recipes> {
    return await this.service.createRecipes({
      data: data,
      select: {
        cookingTime: true,
        createdAt: true,
        id: true,
        isFavorite: true,
        name: true,
        recipeType: true,
        servings: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Recipes] })
  @ApiNestedQuery(RecipesFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Recipes",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async recipesItems(@common.Req() request: Request): Promise<Recipes[]> {
    const args = plainToClass(RecipesFindManyArgs, request.query);
    return this.service.recipesItems({
      ...args,
      select: {
        cookingTime: true,
        createdAt: true,
        id: true,
        isFavorite: true,
        name: true,
        recipeType: true,
        servings: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Recipes })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Recipes",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async recipes(
    @common.Param() params: RecipesWhereUniqueInput
  ): Promise<Recipes | null> {
    const result = await this.service.recipes({
      where: params,
      select: {
        cookingTime: true,
        createdAt: true,
        id: true,
        isFavorite: true,
        name: true,
        recipeType: true,
        servings: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Recipes })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Recipes",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRecipes(
    @common.Param() params: RecipesWhereUniqueInput,
    @common.Body() data: RecipesUpdateInput
  ): Promise<Recipes | null> {
    try {
      return await this.service.updateRecipes({
        where: params,
        data: data,
        select: {
          cookingTime: true,
          createdAt: true,
          id: true,
          isFavorite: true,
          name: true,
          recipeType: true,
          servings: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Recipes })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Recipes",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRecipes(
    @common.Param() params: RecipesWhereUniqueInput
  ): Promise<Recipes | null> {
    try {
      return await this.service.deleteRecipes({
        where: params,
        select: {
          cookingTime: true,
          createdAt: true,
          id: true,
          isFavorite: true,
          name: true,
          recipeType: true,
          servings: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/recipeIngredientsItems")
  @ApiNestedQuery(RecipeIngredientsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "RecipeIngredients",
    action: "read",
    possession: "any",
  })
  async findRecipeIngredientsItems(
    @common.Req() request: Request,
    @common.Param() params: RecipesWhereUniqueInput
  ): Promise<RecipeIngredients[]> {
    const query = plainToClass(RecipeIngredientsFindManyArgs, request.query);
    const results = await this.service.findRecipeIngredientsItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        ingredient: {
          select: {
            id: true,
          },
        },

        quantity: true,

        recipe: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/recipeIngredientsItems")
  @nestAccessControl.UseRoles({
    resource: "Recipes",
    action: "update",
    possession: "any",
  })
  async connectRecipeIngredientsItems(
    @common.Param() params: RecipesWhereUniqueInput,
    @common.Body() body: RecipeIngredientsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recipeIngredientsItems: {
        connect: body,
      },
    };
    await this.service.updateRecipes({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/recipeIngredientsItems")
  @nestAccessControl.UseRoles({
    resource: "Recipes",
    action: "update",
    possession: "any",
  })
  async updateRecipeIngredientsItems(
    @common.Param() params: RecipesWhereUniqueInput,
    @common.Body() body: RecipeIngredientsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recipeIngredientsItems: {
        set: body,
      },
    };
    await this.service.updateRecipes({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/recipeIngredientsItems")
  @nestAccessControl.UseRoles({
    resource: "Recipes",
    action: "update",
    possession: "any",
  })
  async disconnectRecipeIngredientsItems(
    @common.Param() params: RecipesWhereUniqueInput,
    @common.Body() body: RecipeIngredientsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recipeIngredientsItems: {
        disconnect: body,
      },
    };
    await this.service.updateRecipes({
      where: params,
      data,
      select: { id: true },
    });
  }
}
