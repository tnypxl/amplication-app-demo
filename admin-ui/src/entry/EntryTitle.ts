import { Entry as TEntry } from "../api/entry/Entry";

export const ENTRY_TITLE_FIELD = "title";

export const EntryTitle = (record: TEntry): string => {
  return record.title || record.id;
};
