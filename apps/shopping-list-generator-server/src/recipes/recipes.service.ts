import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecipesServiceBase } from "./base/recipes.service.base";

@Injectable()
export class RecipesService extends RecipesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
