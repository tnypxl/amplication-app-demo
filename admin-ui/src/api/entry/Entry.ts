import { JsonValue } from "type-fest";

export type Entry = {
  content: JsonValue;
  createdAt: Date;
  id: string;
  title: string;
  updatedAt: Date;
};
