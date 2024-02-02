import { HttpException, Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { Prisma, Recipe as RecipeModel } from '@prisma/client';
import { RecipeAlreadyExistException } from 'src/auth/exceptions/recipealreadyexist.exception';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  async create(createRecipeDto: CreateRecipeDto): Promise<RecipeModel> {
    return this.prisma.recipe.create({
      data: createRecipeDto,
    });
  }

  async createIfNotExist(
    where: Prisma.RecipeWhereInput,
    createRecipeDto: CreateRecipeDto,
    throwError?: () => HttpException,
  ): Promise<RecipeModel> {
    const recipe = await this.prisma.recipe.findFirst({ where });
    if (!recipe) {
      return this.create(createRecipeDto);
    }

    if (throwError) throw throwError();
    else throw new RecipeAlreadyExistException();
  }

  async updateById(
    id: number,
    recipe: Prisma.RecipeUpdateInput,
  ): Promise<RecipeModel> {
    return this.prisma.extended.recipe.update({
      data: recipe,
      where: { id },
    });
  }

  async update(params: {
    where: Prisma.RecipeWhereUniqueInput;
    data: Prisma.RecipeUpdateInput;
  }): Promise<RecipeModel> {
    const { where, data } = params;
    return this.prisma.recipe.update({ where, data });
  }

  async delete(id: number): Promise<RecipeModel> {
    return this.prisma.recipe.delete({
      where: { id },
    });
  }

  async findAll(): Promise<RecipeModel[]> {
    return this.prisma.extended.recipe.findMany({
      include: { author: true },
    });
  }

  async findOneById(id: number): Promise<RecipeModel> {
    return await this.prisma.extended.recipe.findUnique({
      where: { id },
      include: { author: true },
    });
  }

  async extendFindOneById(id: number): Promise<RecipeModel> {
    return await this.prisma.extended.recipe.findUnique({
      where: { id },
      include: { author: true },
    });
  }

  async findByUserId(userId: number): Promise<RecipeModel[]> {
    return await this.prisma.extended.recipe.findMany({
      where: { userId },
      include: { author: true },
    });
  }

  async findByCategory(category: string): Promise<RecipeModel[]> {
    return await this.prisma.extended.recipe.findMany({
      where: { category },
      include: { author: true },
    });
  }

  async findUnique(args: Prisma.RecipeFindUniqueArgs): Promise<RecipeModel> {
    return await this.prisma.recipe.findUnique(args);
  }

  async getUserLikedRecipe(userId: number): Promise<RecipeModel[]> {
    return await this.prisma.extended.recipe.findMany({
      where: { recipeLikes: { some: { userId } } },
      include: { author: true },
    });
  }

  async likeRecipe(userId: number, recipeId: number): Promise<RecipeModel> {
    const existingLike = await this.prisma.likeRecipe.findUnique({
      where: {
        userId_recipeId: { userId, recipeId },
      },
    });

    if (existingLike) {
      throw new HttpException('User has already liked this recipe.', 400);
    }

    await this.prisma.likeRecipe.create({
      data: {
        userId,
        recipeId,
      },
    });

    const likeCount = await this.prisma.likeRecipe.count({
      where: {
        recipeId: recipeId,
      },
    });

    return this.prisma.recipe.update({
      where: { id: recipeId },
      data: {
        likes: likeCount,
      },
    });
  }

  async dislikeRecipe(userId: number, recipeId: number): Promise<RecipeModel> {
    const existingLike = await this.prisma.likeRecipe.findUnique({
      where: {
        userId_recipeId: { userId, recipeId },
      },
    });

    if (!existingLike) {
      throw new HttpException('User has not liked this recipe.', 400);
    }

    await this.prisma.likeRecipe.delete({
      where: {
        userId_recipeId: { userId, recipeId },
      },
    });

    const likeCount = await this.prisma.likeRecipe.count({
      where: {
        recipeId: recipeId,
      },
    });

    return this.prisma.recipe.update({
      where: { id: recipeId },
      data: {
        likes: likeCount,
      },
    });
  }
}
