import { Prisma, Recipe, User } from '@prisma/client';
export declare class RecipeDto implements Recipe {
    id: number;
    auteur: User;
    title: string;
    description: string;
    imageUrl: string;
    cookTime: string;
    userId: number;
    likes: number;
    category: string;
    date: Date;
    ingredients: Prisma.JsonObject;
    steps: Array<string>;
}
