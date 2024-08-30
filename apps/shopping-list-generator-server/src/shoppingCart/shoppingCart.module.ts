import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ShoppingCartModuleBase } from "./base/shoppingCart.module.base";
import { ShoppingCartService } from "./shoppingCart.service";
import { ShoppingCartController } from "./shoppingCart.controller";
import { ShoppingCartResolver } from "./shoppingCart.resolver";

@Module({
  imports: [ShoppingCartModuleBase, forwardRef(() => AuthModule)],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService, ShoppingCartResolver],
  exports: [ShoppingCartService],
})
export class ShoppingCartModule {}
