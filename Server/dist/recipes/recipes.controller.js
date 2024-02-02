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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/auth.guard");
const recipes_service_1 = require("./recipes.service");
const update_recipe_dto_1 = require("./dto/update-recipe.dto");
const create_recipe_dto_1 = require("./dto/create-recipe.dto");
const recipe_dto_1 = require("./dto/recipe-dto");
let RecipesController = class RecipesController {
    constructor(recipesService) {
        this.recipesService = recipesService;
    }
    create(createRecipeDto) {
        return this.recipesService.create(createRecipeDto);
    }
    findAll() {
        return this.recipesService.findAll();
    }
    findByCategory(category) {
        return this.recipesService.findByCategory(category);
    }
    findByUserId(userId) {
        return this.recipesService.findByUserId(userId);
    }
    async getLikedRecipes(req) {
        return this.recipesService.getUserLikedRecipe(req.user.id);
    }
    findOne(id) {
        const recipe = this.recipesService.findOneById(id);
        if (recipe === null)
            throw new common_1.NotFoundException("Can't find recipe with id: " + id);
        return recipe;
    }
    update(id, updateRecipeDto) {
        const recipe = this.recipesService.findOneById(id);
        if (recipe === null)
            throw new common_1.NotFoundException("Can't find recipe with id: " + id);
        return this.recipesService.updateById(id, updateRecipeDto);
    }
    async like(req, id) {
        return this.recipesService.likeRecipe(req.user.id, id);
    }
    async dislike(req, id) {
        return this.recipesService.dislikeRecipe(req.user.id, id);
    }
    remove(id) {
        return this.recipesService.delete(id);
    }
};
exports.RecipesController = RecipesController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    (0, swagger_1.ApiOkResponse)({ type: recipe_dto_1.RecipeDto, description: 'Successfully created' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_recipe_dto_1.CreateRecipeDto]),
    __metadata("design:returntype", void 0)
], RecipesController.prototype, "create", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({ type: [recipe_dto_1.RecipeDto], description: 'Successfully Pull' }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecipesController.prototype, "findAll", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({ type: [recipe_dto_1.RecipeDto], description: 'Successfully Pull' }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('category/:category'),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecipesController.prototype, "findByCategory", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({ type: [recipe_dto_1.RecipeDto], description: 'Successfully Pull' }),
    (0, common_1.Get)('users/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RecipesController.prototype, "findByUserId", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    (0, swagger_1.ApiOkResponse)({
        type: [recipe_dto_1.RecipeDto],
        description: 'Successfully get liked recipes',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('liked'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "getLikedRecipes", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    (0, swagger_1.ApiOkResponse)({ type: recipe_dto_1.RecipeDto, description: 'Successfully Pull' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Recipe not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RecipesController.prototype, "findOne", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    (0, swagger_1.ApiOkResponse)({ type: recipe_dto_1.RecipeDto, description: 'Successfully update' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Recipe not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_recipe_dto_1.UpdateRecipeDto]),
    __metadata("design:returntype", void 0)
], RecipesController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    (0, swagger_1.ApiOkResponse)({ type: recipe_dto_1.RecipeDto, description: 'Successfully like recipe' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Recipe not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('like/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "like", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    (0, swagger_1.ApiOkResponse)({
        type: recipe_dto_1.RecipeDto,
        description: 'Successfully dislike recipe',
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Recipe not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('unlike/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "dislike", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Recipe not found' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Successfully delete' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RecipesController.prototype, "remove", null);
exports.RecipesController = RecipesController = __decorate([
    (0, swagger_1.ApiTags)('recipes'),
    (0, common_1.Controller)('recipes'),
    __metadata("design:paramtypes", [recipes_service_1.RecipesService])
], RecipesController);
//# sourceMappingURL=recipes.controller.js.map