import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { RatingService } from './rating.service';
import { RatingController } from './rating.controller';


@Module({
  providers: [RatingService],
  controllers: [RatingController],
  imports: [
    TypeOrmModule.forFeature([
    ])
  ]
})
export class RatingModule {}
