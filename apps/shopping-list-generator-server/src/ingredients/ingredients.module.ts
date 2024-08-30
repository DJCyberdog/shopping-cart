import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IngredientsModuleBase } from "./base/ingredients.module.base";
import { IngredientsService } from "./ingredients.service";
import { IngredientsController } from "./ingredients.controller";
import { IngredientsResolver } from "./ingredients.resolver";

@Module({
  imports: [IngredientsModuleBase, forwardRef(() => AuthModule)],
  controllers: [IngredientsController],
  providers: [IngredientsService, IngredientsResolver],
  exports: [IngredientsService],
})
export class IngredientsModule {}
