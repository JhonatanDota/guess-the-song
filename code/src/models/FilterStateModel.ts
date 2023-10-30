import ArtistModel from "./ArtistModel";

type FilterDefinition = {
  func: (artists: ArtistModel[]) => ArtistModel[];
  haveFilter: boolean;
};

export interface FilterStateModel {
  genre: FilterDefinition;
  searchName: FilterDefinition;
}

export const DEFAULT_FILTER_STATE: FilterStateModel = {
  genre: { func: (ARTISTS) => ARTISTS, haveFilter: false },
  searchName: { func: (ARTISTS) => ARTISTS, haveFilter: false },
};
