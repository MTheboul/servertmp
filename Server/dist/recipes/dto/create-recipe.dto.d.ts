import { Prisma } from '@prisma/client';
export declare class CreateRecipeDto {
    title: string;
    userId: number;
    imageUrl?: string;
    description: string;
    ingredients: Prisma.JsonObject;
    steps: Array<string>;
    cookTime: string;
    category?: string;
}
