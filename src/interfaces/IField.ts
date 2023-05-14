import { ITag } from "./ITag";

export interface IField {
  name: string;
  description: string;
  tags: ITag[];
}
