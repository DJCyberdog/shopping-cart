import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecipeIngredientsServiceBase } from "./base/recipeIngredients.service.base";

@Injectable()
export class RecipeIngredientsService extends RecipeIngredientsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
