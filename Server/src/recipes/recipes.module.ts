import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { JWTModule } from 'src/jwt/jwt.module';
import { PrismaModule } from 'src/prisma.module';
import { UsersService } from '../users/users.service';

@Module({
  imports: [PrismaModule, JWTModule],
  controllers: [RecipesController],
  providers: [RecipesService, UsersService],
  exports: [RecipesService],
})
export class RecipesModule {}
