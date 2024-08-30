import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FridgeItemsServiceBase } from "./base/fridgeItems.service.base";

@Injectable()
export class FridgeItemsService extends FridgeItemsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
