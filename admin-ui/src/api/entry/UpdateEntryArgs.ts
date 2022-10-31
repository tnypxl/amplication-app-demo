import { EntryWhereUniqueInput } from "./EntryWhereUniqueInput";
import { EntryUpdateInput } from "./EntryUpdateInput";

export type UpdateEntryArgs = {
  where: EntryWhereUniqueInput;
  data: EntryUpdateInput;
};
