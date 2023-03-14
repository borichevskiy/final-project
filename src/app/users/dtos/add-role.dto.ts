import { UserRoleTypes } from '../../roles/enums/user-role-types.enum';

export class AddRoleDto {
  userId: string;

  readonly type: UserRoleTypes;

  readonly name: string;
}