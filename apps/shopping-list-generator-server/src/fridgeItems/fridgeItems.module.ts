import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FridgeItemsModuleBase } from "./base/fridgeItems.module.base";
import { FridgeItemsService } from "./fridgeItems.service";
import { FridgeItemsController } from "./fridgeItems.controller";
import { FridgeItemsResolver } from "./fridgeItems.resolver";

@Module({
  imports: [FridgeItemsModuleBase, forwardRef(() => AuthModule)],
  controllers: [FridgeItemsController],
  providers: [FridgeItemsService, FridgeItemsResolver],
  exports: [FridgeItemsService],
})
export class FridgeItemsModule {}
