import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type EntryWhereInput = {
  content?: JsonFilter;
  id?: StringFilter;
  title?: StringFilter;
};
