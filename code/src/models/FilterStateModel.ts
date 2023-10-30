export interface FilterStateModel {
  genre: string[];
  searchName: string;
}

export const FILTER_STATE_DEFAULT_DATA: FilterStateModel = {
  genre: [],
  searchName: "",
};
