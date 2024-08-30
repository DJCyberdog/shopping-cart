import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RecipeIngredientsModuleBase } from "./base/recipeIngredients.module.base";
import { RecipeIngredientsService } from "./recipeIngredients.service";
import { RecipeIngredientsController } from "./recipeIngredients.controller";
import { RecipeIngredientsResolver } from "./recipeIngredients.resolver";

@Module({
  imports: [RecipeIngredientsModuleBase, forwardRef(() => AuthModule)],
  controllers: [RecipeIngredientsController],
  providers: [RecipeIngredientsService, RecipeIngredientsResolver],
  exports: [RecipeIngredientsService],
})
export class RecipeIngredientsModule {}
