import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';



@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    TypeOrmModule.forFeature([

    ])
  ]
})
export class RolesModule {}
