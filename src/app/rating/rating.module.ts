import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { RatingService } from './rating.service';
import { RatingController } from './rating.controller';
import { RatingEntity } from "./entities/rating.entity";


@Module({
  providers: [RatingService],
  controllers: [RatingController],
  imports: [
    TypeOrmModule.forFeature([
      RatingEntity
    ])
  ]
})
export class RatingModule {}
