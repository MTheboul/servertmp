import { HttpException } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { Prisma, Recipe as RecipeModel } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class RecipesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createRecipeDto: CreateRecipeDto): Promise<RecipeModel>;
    createIfNotExist(where: Prisma.RecipeWhereInput, createRecipeDto: CreateRecipeDto, throwError?: () => HttpException): Promise<RecipeModel>;
    updateById(id: number, recipe: Prisma.RecipeUpdateInput): Promise<RecipeModel>;
    update(params: {
        where: Prisma.RecipeWhereUniqueInput;
        data: Prisma.RecipeUpdateInput;
    }): Promise<RecipeModel>;
    delete(id: number): Promise<RecipeModel>;
    findAll(): Promise<RecipeModel[]>;
    findOneById(id: number): Promise<RecipeModel>;
    extendFindOneById(id: number): Promise<RecipeModel>;
    findByUserId(userId: number): Promise<RecipeModel[]>;
    findByCategory(category: string): Promise<RecipeModel[]>;
    findUnique(args: Prisma.RecipeFindUniqueArgs): Promise<RecipeModel>;
    getUserLikedRecipe(userId: number): Promise<RecipeModel[]>;
    likeRecipe(userId: number, recipeId: number): Promise<RecipeModel>;
    dislikeRecipe(userId: number, recipeId: number): Promise<RecipeModel>;
}
