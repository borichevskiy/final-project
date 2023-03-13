import { Column } from "typeorm";
import { UserRoleTypes } from "../enums/user-role-types.enum";
import { UserPermissions } from "../enums/user-permissions.enum";

export class CreateRoleDto {
  readonly type: UserRoleTypes;

  readonly name: string;

  readonly permissions: UserPermissions[];
}