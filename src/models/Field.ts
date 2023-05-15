import { Tag } from "./Tag";

export interface Field {
  id: number;
  name: string;
  description: string;
  tags: Tag[];
}
