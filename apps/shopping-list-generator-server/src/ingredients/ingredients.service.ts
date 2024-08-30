import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IngredientsServiceBase } from "./base/ingredients.service.base";

@Injectable()
export class IngredientsService extends IngredientsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
