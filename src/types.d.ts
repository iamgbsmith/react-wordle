// types.d.ts
export type MatchType = string | null | undefined;

export type SelectedLetter = {
  letter: string;
  matchType: MatchType;
};

export type Size = {
  width: number | undefined;
  height: number | undefined;
};
