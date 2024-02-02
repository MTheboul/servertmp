import { RecipesService } from './recipes.service';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { CreateRecipeDto } from './dto/create-recipe.dto';
export declare class RecipesController {
    private readonly recipesService;
    constructor(recipesService: RecipesService);
    create(createRecipeDto: CreateRecipeDto): Promise<{
        id: number;
        title: string;
        description: string;
        userId: number;
        imageUrl: string;
        cookTime: string;
        likes: number;
        category: string;
        date: Date;
        ingredients: import(".prisma/client").Prisma.JsonValue;
        steps: string[];
    }>;
    findAll(): Promise<{
        id: number;
        title: string;
        description: string;
        userId: number;
        imageUrl: string;
        cookTime: string;
        likes: number;
        category: string;
        date: Date;
        ingredients: import(".prisma/client").Prisma.JsonValue;
        steps: string[];
    }[]>;
    findByCategory(category: string): Promise<{
        id: number;
        title: string;
        description: string;
        userId: number;
        imageUrl: string;
        cookTime: string;
        likes: number;
        category: string;
        date: Date;
        ingredients: import(".prisma/client").Prisma.JsonValue;
        steps: string[];
    }[]>;
    findByUserId(userId: number): Promise<{
        id: number;
        title: string;
        description: string;
        userId: number;
        imageUrl: string;
        cookTime: string;
        likes: number;
        category: string;
        date: Date;
        ingredients: import(".prisma/client").Prisma.JsonValue;
        steps: string[];
    }[]>;
    getLikedRecipes(req: any): Promise<{
        id: number;
        title: string;
        description: string;
        userId: number;
        imageUrl: string;
        cookTime: string;
        likes: number;
        category: string;
        date: Date;
        ingredients: import(".prisma/client").Prisma.JsonValue;
        steps: string[];
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        title: string;
        description: string;
        userId: number;
        imageUrl: string;
        cookTime: string;
        likes: number;
        category: string;
        date: Date;
        ingredients: import(".prisma/client").Prisma.JsonValue;
        steps: string[];
    }>;
    update(id: number, updateRecipeDto: UpdateRecipeDto): Promise<{
        id: number;
        title: string;
        description: string;
        userId: number;
        imageUrl: string;
        cookTime: string;
        likes: number;
        category: string;
        date: Date;
        ingredients: import(".prisma/client").Prisma.JsonValue;
        steps: string[];
    }>;
    like(req: any, id: number): Promise<{
        id: number;
        title: string;
        description: string;
        userId: number;
        imageUrl: string;
        cookTime: string;
        likes: number;
        category: string;
        date: Date;
        ingredients: import(".prisma/client").Prisma.JsonValue;
        steps: string[];
    }>;
    dislike(req: any, id: number): Promise<{
        id: number;
        title: string;
        description: string;
        userId: number;
        imageUrl: string;
        cookTime: string;
        likes: number;
        category: string;
        date: Date;
        ingredients: import(".prisma/client").Prisma.JsonValue;
        steps: string[];
    }>;
    remove(id: number): Promise<{
        id: number;
        title: string;
        description: string;
        userId: number;
        imageUrl: string;
        cookTime: string;
        likes: number;
        category: string;
        date: Date;
        ingredients: import(".prisma/client").Prisma.JsonValue;
        steps: string[];
    }>;
}
