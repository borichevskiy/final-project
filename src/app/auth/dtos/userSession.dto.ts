import { IsArray, IsNumber, IsString, IsUUID } from "class-validator";
import { UserEntity } from "src/app/users/entities/users.entity";

// ============ enums ===============
import { UserPermissions } from "../../roles/enums/user-permissions.enum";
import { UserRoleTypes } from "../../roles/enums/user-role-types.enum";


export class UserSessionDto {
  @IsUUID()
  id: string;

  @IsString()
  email: string;

  @IsNumber()
  roleId: number;

  public static fromPayload(dto: UserSessionDto): UserSessionDto {
    if (!dto) {
      return;
    }

    return {
      id: dto.id,
      email: dto.email,
      roleId: dto.roleId
    };
  }
}