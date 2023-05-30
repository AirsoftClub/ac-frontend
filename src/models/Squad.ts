import { User } from "./User";

export interface Squad {
  id: number;
  name: string;
  emblem: string;
  members: User[];
}
