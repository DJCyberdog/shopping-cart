import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RecipesModuleBase } from "./base/recipes.module.base";
import { RecipesService } from "./recipes.service";
import { RecipesController } from "./recipes.controller";
import { RecipesResolver } from "./recipes.resolver";

@Module({
  imports: [RecipesModuleBase, forwardRef(() => AuthModule)],
  controllers: [RecipesController],
  providers: [RecipesService, RecipesResolver],
  exports: [RecipesService],
})
export class RecipesModule {}
