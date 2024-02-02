"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesService = void 0;
const common_1 = require("@nestjs/common");
const recipealreadyexist_exception_1 = require("../auth/exceptions/recipealreadyexist.exception");
const prisma_service_1 = require("../prisma.service");
let RecipesService = class RecipesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRecipeDto) {
        return this.prisma.recipe.create({
            data: createRecipeDto,
        });
    }
    async createIfNotExist(where, createRecipeDto, throwError) {
        const recipe = await this.prisma.recipe.findFirst({ where });
        if (!recipe) {
            return this.create(createRecipeDto);
        }
        if (throwError)
            throw throwError();
        else
            throw new recipealreadyexist_exception_1.RecipeAlreadyExistException();
    }
    async updateById(id, recipe) {
        return this.prisma.extended.recipe.update({
            data: recipe,
            where: { id },
        });
    }
    async update(params) {
        const { where, data } = params;
        return this.prisma.recipe.update({ where, data });
    }
    async delete(id) {
        return this.prisma.recipe.delete({
            where: { id },
        });
    }
    async findAll() {
        return this.prisma.extended.recipe.findMany({
            include: { author: true },
        });
    }
    async findOneById(id) {
        return await this.prisma.extended.recipe.findUnique({
            where: { id },
            include: { author: true },
        });
    }
    async extendFindOneById(id) {
        return await this.prisma.extended.recipe.findUnique({
            where: { id },
            include: { author: true },
        });
    }
    async findByUserId(userId) {
        return await this.prisma.extended.recipe.findMany({
            where: { userId },
            include: { author: true },
        });
    }
    async findByCategory(category) {
        return await this.prisma.extended.recipe.findMany({
            where: { category },
            include: { author: true },
        });
    }
    async findUnique(args) {
        return await this.prisma.recipe.findUnique(args);
    }
    async getUserLikedRecipe(userId) {
        return await this.prisma.extended.recipe.findMany({
            where: { recipeLikes: { some: { userId } } },
            include: { author: true },
        });
    }
    async likeRecipe(userId, recipeId) {
        const existingLike = await this.prisma.likeRecipe.findUnique({
            where: {
                userId_recipeId: { userId, recipeId },
            },
        });
        if (existingLike) {
            throw new common_1.HttpException('User has already liked this recipe.', 400);
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
    async dislikeRecipe(userId, recipeId) {
        const existingLike = await this.prisma.likeRecipe.findUnique({
            where: {
                userId_recipeId: { userId, recipeId },
            },
        });
        if (!existingLike) {
            throw new common_1.HttpException('User has not liked this recipe.', 400);
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
};
exports.RecipesService = RecipesService;
exports.RecipesService = RecipesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RecipesService);
//# sourceMappingURL=recipes.service.js.map